import React, { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import galleryService from '../services/galleryService';
import './PhotoGallery.css';

const getGalleryItems = (payload) => {
  const items = Array.isArray(payload)
    ? payload
    : payload?.data || payload?.gallery || payload?.images || [];

  return Array.isArray(items) ? items : [];
};

const getImageUrl = (item) => {
  if (!item) return '';

  const path = typeof item === 'string'
    ? item
    : (item?.image || item?.imageUrl || item?.url || item?.photo || item?.file);

  if (!path || typeof path !== 'string') return '';

  // Local Webpack bundled assets, data/blob URIs, and full URLs should be returned as-is
  if (
    /^https?:\/\//i.test(path) ||
    path.startsWith('data:') ||
    path.startsWith('blob:') ||
    path.startsWith('/static/') ||
    path.startsWith('static/')
  ) {
    return path;
  }

  const apiUrl = process.env.REACT_APP_API_URL || process.env.REACT_APP_URL || '';
  if (!apiUrl) return path;

  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // If path already starts with /ml-api/ (e.g. /ml-api/uploads/trainers/Aarti%20Sahu.jpeg)
  if (cleanPath.startsWith('/ml-api/')) {
    try {
      const hostOrigin = new URL(apiUrl).origin;
      return `${hostOrigin}${cleanPath}`;
    } catch (e) {
      const baseHost = apiUrl.split('/ml-api')[0];
      return `${baseHost}${cleanPath}`;
    }
  }

  const origin = apiUrl.replace(/\/api\/?$/, '');
  return `${origin}${cleanPath}`;
};

const PhotoGallery = ({
  eyebrow = 'Snapshots of innovation',
  heading = 'Life at IBITF',
  description,
  initialPhotoCount,
  variant,
}) => {
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState('loading');
  const [activePhoto, setActivePhoto] = useState(null);
  const [showAll, setShowAll] = useState(false);



  const removeBrokenPhoto = (photoKey) => {
    setPhotos((current) => current.filter((item) => {
      const key = item?._id || item?.id || getImageUrl(item);
      return key !== photoKey;
    }));
  };

  useEffect(() => {
    let isCurrent = true;

    const loadGallery = async () => {
      try {
        const firstResponse = await galleryService.getPublicGallery({ page: 1, limit: 50 });
        if (!isCurrent) return;
        const firstItems = getGalleryItems(firstResponse);
        const totalPages = Number(firstResponse?.totalPages || firstResponse?.meta?.totalPages || 1);
        let allItems = [...firstItems];

        if (totalPages > 1) {
          const nextPageRequests = Array.from({ length: totalPages - 1 }, (_, index) =>
            galleryService.getPublicGallery({ page: index + 2, limit: 50 })
          );
          const nextResponses = await Promise.all(nextPageRequests);
          if (!isCurrent) return;
          nextResponses.forEach((response) => {
            allItems.push(...getGalleryItems(response));
          });
        }

        const seen = new Set();
        const uniqueItems = allItems.filter((item) => {
          const key = item?._id || item?.id || item?.image || item?.imageUrl || item?.url;
          if (!key) return false;
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });

        const usableItems = uniqueItems.filter((item) => Boolean(getImageUrl(item)));
        setPhotos(usableItems);
        setStatus('ready');
      } catch (error) {
        if (!isCurrent) return;
        // If fetching fails, show no images
        setPhotos([]);
        setStatus('error');
      }
    };

    loadGallery();
    return () => { isCurrent = false; };
  }, []);

  if (status === 'error' || (status === 'ready' && photos.length === 0)) return null;

  const visiblePhotos = initialPhotoCount && !showAll
    ? photos.slice(0, initialPhotoCount)
    : photos;
  const hasMorePhotos = initialPhotoCount && photos.length > initialPhotoCount;

  return (
    <section className={`photo-gallery${variant ? ` photo-gallery--${variant}` : ''}`} aria-labelledby="gallery-heading">
      <div className="photo-gallery__header">
        <div>
          <span className="photo-gallery__eyebrow">{eyebrow}</span>
          <h2 id="gallery-heading">{heading}</h2>
          {description && <p className="photo-gallery__description">{description}</p>}
        </div>
        <span className="photo-gallery__count">{status === 'ready' ? `${photos.length} moments` : 'Loading moments'}</span>
      </div>

      {status === 'loading' ? (
        <div className="photo-gallery__grid photo-gallery__grid--loading" aria-label="Loading gallery">
          {[...Array(6)].map((_, index) => <div className="photo-gallery__skeleton" key={index} />)}
        </div>
      ) : (
        <div className="photo-gallery__grid">
          {visiblePhotos.map((photo, index) => {
            const imageUrl = getImageUrl(photo);
            const title = photo?.title || photo?.name || photo?.caption || `IBITF moment ${index + 1}`;
            const photoKey = photo?._id || photo?.id || imageUrl || `${title}-${index}`;
            return (
              <button
                className={`photo-gallery__item photo-gallery__item--${(index % 5) + 1}`}
                key={photoKey}
                onClick={() => setActivePhoto({ imageUrl, title })}
                type="button"
              >
                <img
                  src={imageUrl}
                  alt={title}
                  loading="lazy"
                  onError={() => removeBrokenPhoto(photoKey)}
                />
                <span className="photo-gallery__overlay"><span>{title}</span><ArrowUpRight size={20} /></span>
              </button>
            );
          })}
        </div>
      )}

      {status === 'ready' && hasMorePhotos && (
        <div className="photo-gallery__actions">
          <button className="photo-gallery__show-more" type="button" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show fewer photos' : `View all ${photos.length} photos`}
          </button>
        </div>
      )}

      {activePhoto && (
        <div className="photo-gallery__lightbox" role="dialog" aria-modal="true" aria-label={activePhoto.title} onClick={() => setActivePhoto(null)}>
          <button className="photo-gallery__close" type="button" aria-label="Close photo" onClick={() => setActivePhoto(null)}><X /></button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={activePhoto.imageUrl} alt={activePhoto.title} />
            <figcaption>{activePhoto.title}</figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;

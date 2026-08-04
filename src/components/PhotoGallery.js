import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ImageOff, X } from 'lucide-react';
import galleryService from '../services/galleryService';
import './PhotoGallery.css';

const getGalleryItems = (payload) => {
  const items = Array.isArray(payload)
    ? payload
    : payload?.data || payload?.gallery || payload?.images || [];

  return Array.isArray(items) ? items : [];
};

const getImageUrl = (item) => {
  const path = item?.image || item?.imageUrl || item?.url || item?.photo || item?.file;
  if (!path || /^https?:\/\//i.test(path) || path.startsWith('data:')) return path;

  const apiUrl = process.env.REACT_APP_API_URL || process.env.REACT_APP_URL || '';
  const origin = apiUrl.replace(/\/api\/?$/, '');
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
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

  useEffect(() => {
    let isCurrent = true;

    const loadGallery = async () => {
      try {
        const response = await galleryService.getPublicGallery();
        if (!isCurrent) return;
        setPhotos(getGalleryItems(response));
        setStatus('ready');
      } catch (error) {
        if (isCurrent) setStatus('error');
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
            return (
              <button
                className={`photo-gallery__item photo-gallery__item--${(index % 5) + 1}`}
                key={photo?._id || photo?.id || `${imageUrl}-${index}`}
                onClick={() => setActivePhoto({ imageUrl, title })}
                type="button"
              >
                {imageUrl ? <img src={imageUrl} alt={title} loading="lazy" /> : <ImageOff aria-hidden="true" />}
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

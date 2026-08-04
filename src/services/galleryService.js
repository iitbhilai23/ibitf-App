import api from './api';

const galleryService = {
  getPublicGallery: async () => {
    const response = await api.get('/public/gallery');
    return response.data;
  },
};

export default galleryService;

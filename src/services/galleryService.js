import api from './api';

const galleryService = {
  getPublicGallery: async (params = {}) => {
    const response = await api.get('/public/gallery', { params });
    return response.data;
  },
};

export default galleryService;

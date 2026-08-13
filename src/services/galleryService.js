import api from './api';

const galleryService = {
  getPublicGallery: async (params = {}) => {
    try {
      const response = await api.get('/public/gallery', { params });
      return response.data;
    } catch (error) {
      console.warn('Gallery API endpoint error:', error?.message);
      return { data: [], totalPages: 1 };
    }
  },
};

export default galleryService;

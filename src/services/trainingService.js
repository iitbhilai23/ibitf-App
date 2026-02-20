import api from './api';

export const trainingService = {

  getAll: async (filters = {}) => {
    try {
      const params = {
        limit: 1000,
        page: 1,
        ...filters,
      };

      const response = await api.get('/trainings', { params });
      return response.data;
    } catch (error) {
      console.error('Get trainings error:', error);
      throw error;
    }
  },

 

  getById: async (id) => {
    try {
      const response = await api.get(`/public/trainings/${id}/details`);
      return response.data;
    } catch (error) {
      console.error('Get training by ID error:', error);
      throw error;
    }
  },

  create: async (data) => {
    try {
      const response = await api.post('/public/trainings', data);
      return response.data;
    } catch (error) {
      console.error('Create training error:', error);
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      const response = await api.put(`/public/trainings/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Update training error:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      await api.delete(`/public/trainings/${id}`);
      return true;
    } catch (error) {
      console.error('Delete training error:', error);
      throw error;
    }
  }
};
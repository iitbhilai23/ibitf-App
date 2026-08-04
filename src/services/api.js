import axios from 'axios';

const api = axios.create({
    //   baseURL: import.meta.env.VITE_API_URL,
    // Support the legacy REACT_APP_URL setting used by existing deployments.
    // Without a base URL Axios sends requests to the React dev server, which
    // makes API routes such as /dashboard/training-stats return a 404.
    baseURL: process.env.REACT_APP_API_URL || process.env.REACT_APP_URL,
    headers: {
        // ❌ REMOVED Content-Type (VERY IMPORTANT)
        // 'x-api-key': import.meta.env.VITE_API_KEY,
        'x-api-key': process.env.REACT_APP_API_KEY,
    },
});
console.log("API URL:", process.env.REACT_APP_API_URL || process.env.REACT_APP_URL);

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Log successful response
        // console.log('API Response:', {
        //   url: response.config.url,
        //   status: response.status,
        //   data: response.data,
        // });
        return response;
    },
    (error) => {
        // Log error response
        console.error('API Error:', {
            url: error.config?.url,
            status: error.response?.status,
            data: error.response?.data,
            message: error.message,
        });

        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/ml/login';
        }
        return Promise.reject(error);
    }
);

export default api;

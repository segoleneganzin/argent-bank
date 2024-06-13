import axios from 'axios';

// create axios instance
const apiClient = axios.create({
  baseURL: 'http://locahost:3001',
});

// add jwt to each request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwt'); // Récupère le token depuis le stockage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;

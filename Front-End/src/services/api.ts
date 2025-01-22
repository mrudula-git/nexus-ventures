import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const authAPI = {
  register: (userData: any) => api.post('/auth/register', userData),
  login: (credentials: any) => api.post('/auth/login', credentials),
  getCurrentUser: () => api.get('/auth/me'),
  updateReferralId: (referralId: string) => api.put('/auth/referral', { referralId }),
};

// Video APIs
export const videoAPI = {
  getAllVideos: () => api.get('/videos'),
  getVideoById: (id: string) => api.get(`/videos/${id}`),
  getUserVideos: () => api.get('/videos/user/videos'),
  uploadVideo: (formData: FormData) => api.post('/videos', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
  updateVideo: (id: string, formData: FormData) => api.put(`/videos/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
  deleteVideo: (id: string) => api.delete(`/videos/${id}`),
};

export default api;

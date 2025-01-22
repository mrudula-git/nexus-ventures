import axios from 'axios';
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: string;
}

interface LoginResponse {
  token: string;
  user: User;
}

interface LoginCredentials {
  username: string;
  password: string;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  username: string;
  password: string;
}

interface ApiResponse<T> {
  data: T;
  message?: string;
}

const API_URL = 'http://localhost:5005/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const authAPI = {
  login: async (credentials: LoginCredentials): Promise<AxiosResponse<LoginResponse>> => {
    return await api.post<LoginResponse>('/auth/login', credentials);
  },

  register: async (userData: RegisterData): Promise<AxiosResponse<ApiResponse<{ message: string }>>> => {
    return await api.post<ApiResponse<{ message: string }>>('/auth/register', userData);
  },

  getCurrentUser: async (): Promise<AxiosResponse<User>> => {
    return await api.get<User>('/auth/me');
  },

  forgotPassword: async (email: string): Promise<AxiosResponse<ApiResponse<{ message: string }>>> => {
    return await api.post<ApiResponse<{ message: string }>>('/auth/forgot-password', { email });
  },

  resetPassword: async (token: string, newPassword: string): Promise<AxiosResponse<ApiResponse<{ message: string }>>> => {
    return await api.post<ApiResponse<{ message: string }>>('/auth/reset-password', { token, newPassword });
  }
};

// Video Management APIs
export const videoAPI = {
  getAllVideos: async (): Promise<AxiosResponse<any[]>> => {
    return await api.get('/videos');
  },
  getVideoById: async (id: string): Promise<AxiosResponse<any>> => {
    return await api.get(`/videos/${id}`);
  },
  uploadVideo: async (formData: FormData): Promise<AxiosResponse<any>> => {
    return await api.post('/videos/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  updateVideo: async (id: string, formData: FormData): Promise<AxiosResponse<any>> => {
    return await api.put(`/videos/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  deleteVideo: async (id: string): Promise<AxiosResponse<any>> => {
    return await api.delete(`/videos/${id}`);
  },
  getVideoStats: async (): Promise<AxiosResponse<any>> => {
    return await api.get('/videos/stats');
  }
};

// User Management APIs
export const userAPI = {
  getAllUsers: async (): Promise<AxiosResponse<User[]>> => {
    return await api.get<User[]>('/users');
  },
  getUserById: async (id: string): Promise<AxiosResponse<User>> => {
    return await api.get<User>(`/users/${id}`);
  },
  updateUser: async (id: string, userData: Partial<User>): Promise<AxiosResponse<User>> => {
    return await api.put<User>(`/users/${id}`, userData);
  },
  deleteUser: async (id: string): Promise<AxiosResponse<any>> => {
    return await api.delete(`/users/${id}`);
  },
  getUserStats: async (): Promise<AxiosResponse<any>> => {
    return await api.get('/users/stats');
  }
};

export type { User, LoginResponse, LoginCredentials, RegisterData, ApiResponse };
export default api;

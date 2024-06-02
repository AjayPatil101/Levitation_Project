// src/services/UserService.js
import axios from 'axios';

const USER_BASE_REST_API_URL = 'http://localhost:8080';

class UserService {
  constructor() {
    this.token = localStorage.getItem('token') || '';
  }

  setToken = (newToken) => {
    localStorage.setItem('token', newToken);
    this.token = newToken;
  };

  clearToken = () => {
    localStorage.removeItem('token');
    this.token = '';
  };

  signup = (user) => {
    return axios.post(`${USER_BASE_REST_API_URL}/signup`, user);
  };

  signin = async (user) => {
    try {
      const response = await axios.post(`${USER_BASE_REST_API_URL}/signin`, user);
      const { token } = response.data;
      this.setToken(token);
      return response;
    } catch (error) {
      throw error;
    }
  };
  paginated = () => {
    const headers = {
      Authorization: `Bearer ${this.token}`,
    };
    return axios.get(`${USER_BASE_REST_API_URL}/getProducts`, { headers });
  };

  delete = (id) => {
    const headers = {
      Authorization: `Bearer ${this.token}`,
    };
    return axios.delete(`${USER_BASE_REST_API_URL}/deleteProduct/${id}`, { headers });
  };

  insert = (product) => {
    const headers = {
      Authorization: `Bearer ${this.token}`,
    };
    return axios.post(`${USER_BASE_REST_API_URL}/addProduct`, product, { headers });
  };
  Update = (id,product) => {
    const headers = {
      Authorization: `Bearer ${this.token}`,
    };
    return axios.put(`${USER_BASE_REST_API_URL}/updateProduct/`+id, product, { headers });
  };
  // Axios interceptor for handling the token on every request
  setupInterceptors = () => {
    axios.interceptors.request.use((config) => {
      if (this.token) {
        config.headers.Authorization = `Bearer ${this.token}`;
      }
      return config;
    });
  };
}

const userService = new UserService();
userService.setupInterceptors(); // Call this to set up the interceptor

export default userService;

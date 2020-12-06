import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5fcaf962034b8400168f2e66.mockapi.io/bookrent/'
});

export default api;
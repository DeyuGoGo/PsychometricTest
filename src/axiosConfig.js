// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.openai.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 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',
  },
});

export default axiosInstance;
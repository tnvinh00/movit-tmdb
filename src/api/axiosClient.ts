import axios from "axios";

import API_CONFIG from "./apiConfig";

const axiosClient = axios.create({
  baseURL: API_CONFIG.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  config.params = {
    api_key: API_CONFIG.apiKey,
    ...config.params,
  };
  return config;
});

axiosClient.interceptors.response.use((response) => {
  return response;
}, (error) => {
  throw error;
});

export default axiosClient;
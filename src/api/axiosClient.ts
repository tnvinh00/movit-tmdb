// @ts-nocheck
import axios from "axios";
import queryString from "query-string";

import APICONFIG from "./apiConfig";

const axiosClient = axios.create({
  baseURL: APICONFIG.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params: any) => queryString.stringify({
    ...params,
    api_key: APICONFIG.apiKey,
  }),
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response;
}, (error) => {
  throw error;
});

export default axiosClient;
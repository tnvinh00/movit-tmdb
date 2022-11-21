import ENVIRONMENT from "../utils/env";

const API_CONFIG = {
  baseUrl: ENVIRONMENT.API_URL,
  apiKey: ENVIRONMENT.API_KEY,
  originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500${imgPath}`,
};

export default API_CONFIG;
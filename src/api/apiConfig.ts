
const APICONFIG = {
  baseUrl: "https://api.themoviedb.org/3/movie/550",
  apiKey: "6c0d169ba6d6f33a4152c90b8e401083",
  originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500${imgPath}`,
};

export default APICONFIG;
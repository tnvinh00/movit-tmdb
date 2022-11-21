import { CATEGORY, MOVIETYPE, TVTYPE } from "../constants/apiConstant";
import axiosClient from "./axiosClient";

const tmdbApi = {
  getMoviesList: (type: keyof typeof MOVIETYPE, params: any) => {
    const url = CATEGORY.MOVIE + "/" + MOVIETYPE[type];
    return axiosClient.get(url, params);
  },
  getTvList: (type: keyof typeof TVTYPE, params: any) => {
    const url = CATEGORY.TV + "/" + TVTYPE[type];
    return axiosClient.get(url, params);
  },
  getVideos: (category: keyof typeof CATEGORY, id: number, params = {}) => {
    const url = `${CATEGORY[category]}/${id}/videos`;
    return axiosClient.get(url, params);
  },
  search: (category: keyof typeof CATEGORY, params: any) => {
    const url = "search/" + CATEGORY[category];
    return axiosClient.get(url, params);
  },
  getDetail: (category: keyof typeof CATEGORY, id: number, params = {}) => {
    const url = CATEGORY[category] + "/" + id;
    return axiosClient.get(url, params);
  },
  credit: (category: keyof typeof CATEGORY, id: number, params = {}) => {
    const url = CATEGORY[category] + "/" + id + "/credits";
    return axiosClient.get(url, params);
  },
  similar: (category: keyof typeof CATEGORY, id: number, params = {}) => {
    const url = CATEGORY[category] + "/" + id + "/similar";
    return axiosClient.get(url, params);
  },
};

export default tmdbApi;
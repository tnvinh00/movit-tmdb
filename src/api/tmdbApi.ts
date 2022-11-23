import { CATEGORY } from "../constants/apiConstant";
import axiosClient from "./axiosClient";

export interface IResponse {
  page?: number;
  results?: any;
  total_pages?: number;
  total_results?: number;
}

const TMDBApi = {
  getMoviesList: (type: string, params = {}) => {
    try {
      const url = CATEGORY.MOVIE + "/" + type;
      return axiosClient.get<IResponse>(url, { params });
    } catch (error) {
      throw error;
    }
  },
  getTvList: (type: string, params = {}) => {
    try {
      const url = CATEGORY.TV + "/" + type;
      return axiosClient.get<IResponse>(url, { params });
    } catch (error) {
      throw error;
    }
  },
  getVideos: (category: string, id: number, params = {}) => {
    try {
      const url = `${category}/${id}/videos`;
      return axiosClient.get<IResponse>(url, { params });
    } catch (error) {
      throw error;
    }
  },
  search: (category: keyof typeof CATEGORY, params = {}) => {
    try {
      const url = "search/" + CATEGORY[category];
      return axiosClient.get<IResponse>(url, { params });
    } catch (error) {
      throw error;
    }
  },
  getDetail: (category: string, id: number, params = {}) => {
    try {
      const url = category + "/" + id;
      return axiosClient.get<IResponse>(url, { params });
    } catch (error) {
      throw error;
    }
  },
  credit: (category: keyof typeof CATEGORY, id: number, params = {}) => {
    try {
      const url = CATEGORY[category] + "/" + id + "/credits";
      return axiosClient.get<IResponse>(url, { params });
    } catch (error) {
      throw error;
    }
  },
  similar: (category: keyof typeof CATEGORY, id: number, params = {}) => {
    try {
      const url = CATEGORY[category] + "/" + id + "/similar";
      return axiosClient.get<IResponse>(url, params);
    } catch (error) {
      throw error;
    }
  },
};

export default TMDBApi;
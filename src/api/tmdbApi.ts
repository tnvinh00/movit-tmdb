import { CATEGORY } from "../constants/apiConstant";
import axiosClient from "./axiosClient";
import { CastModel } from '../models/movie.model';

export interface IResponse {
  cast: CastModel[];
  page?: number;
  results?: any;
  total_pages?: number;
  total_results?: number;
}

const TMDBApi = {
  getList: (category: string, type: string, params: any) => {
    try {
      const url = `/${category}/${type}`;
      return axiosClient.get<IResponse>(url, { params });
    } catch (error) {
      throw error;
    }
  },
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
  search: (category: string, params = {}) => {
    try {
      const url = "search/" + category;
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
  credit: (category: string, id: number, params = {}) => {
    try {
      const url = category + "/" + id + "/credits";
      return axiosClient.get<IResponse>(url, { params });
    } catch (error) {
      throw error;
    }
  },
  similar: (category: string, id: number, params = {}) => {
    try {
      const url = category + "/" + id + "/similar";
      return axiosClient.get<IResponse>(url, { params });
    } catch (error) {
      throw error;
    }
  },
  getReviews: (category: string, id: number, params = {}) => {
    try {
      const url = category + "/" + id + "/reviews";
      return axiosClient.get<IResponse>(url, { params });
    } catch (error) {
      throw error;
    }
  },
  getCredit: (category: string, id: number, params = {}) => {
    try {
      const url = category + "/" + id + "/credits";
      return axiosClient.get<IResponse>(url, { params });
    } catch (error) {
      throw error;
    }
  },
  getRecommendations: (category: string, id: number, params = {}) => {
    try {
      const url = category + "/" + id + "/recommendations";
      return axiosClient.get<IResponse>(url, { params });
    } catch (error) {
      throw error;
    }
  }
};

export default TMDBApi;
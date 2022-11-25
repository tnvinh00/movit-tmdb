import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TMDBApi from 'api/tmdbApi';
import MovieModel from 'models/movie.model';

export interface CatalogState {
  data: MovieModel[];
  isLoading: boolean;
  isLoadingMore: boolean;
  page: number;
  totalPage: number;
}

const initialState: CatalogState = {
  data: [],
  isLoading: false,
  isLoadingMore: false,
  page: 1,
  totalPage: 1,
}

export const fetchCatalogList = createAsyncThunk(
  'catalog/fetchCatalogList',
  async (payload: any) => {
    const { category, type, page } = payload;
    const response = await TMDBApi.getList(category, type, { page });
    return response;
  }
)

export const fetchCatalogMore = createAsyncThunk(
  'catalog/fetchCatalogMore',
  async (payload: any) => {
    const { category, type, page } = payload;
    const response = await TMDBApi.getList(category, type, { page });
    return response;
  }
)

export const fetchSearchList = createAsyncThunk(
  'catalog/fetchSearchList',
  async (payload: any) => {
    const { category, query, page } = payload;
    const response = await TMDBApi.search(category, { page, query });
    return response;
  }
)

export const fetchSearchMoreList = createAsyncThunk(
  'catalog/fetchSearchMoreList',
  async (payload: any) => {
    const { category, query, page } = payload;
    const response = await TMDBApi.search(category, { page, query });
    return response;
  }
)

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCatalogList.pending, (state) => {
      state.data = [];
      state.page = 1;
      state.totalPage = 1;
      state.isLoading = true;
    })
    builder.addCase(fetchCatalogList.fulfilled, (state, action) => {
      state.data = action.payload.data.results;
      state.page = action.payload.data.page;
      state.totalPage = action.payload.data.total_pages;
      state.isLoading = false;
    })
    builder.addCase(fetchCatalogList.rejected, (state) => {
      state.isLoading = false;
    })
    builder.addCase(fetchCatalogMore.pending, (state) => {
      state.isLoadingMore = true;
    })
    builder.addCase(fetchCatalogMore.fulfilled, (state, action) => {
      state.data = [...state.data, ...action.payload.data.results];
      state.page = action.payload.data.page;
      state.totalPage = action.payload.data.total_pages;
      state.isLoadingMore = false;
    })
    builder.addCase(fetchCatalogMore.rejected, (state) => {
      state.isLoadingMore = false;
    })
    builder.addCase(fetchSearchList.pending, (state) => {
      state.page = 1;
      state.totalPage = 1;
      state.data = [];
      state.isLoading = true;
    })
    builder.addCase(fetchSearchList.fulfilled, (state, action) => {
      state.data = action.payload.data.results;
      state.page = action.payload.data.page;
      state.totalPage = action.payload.data.total_pages;
      state.isLoading = false;
    })
    builder.addCase(fetchSearchList.rejected, (state) => {
      state.isLoading = false;
    })
    builder.addCase(fetchSearchMoreList.pending, (state) => {
      state.isLoadingMore = true;
    })
    builder.addCase(fetchSearchMoreList.fulfilled, (state, action) => {
      state.data = [...state.data, ...action.payload.data.results];
      state.page = action.payload.data.page;
      state.totalPage = action.payload.data.total_pages;
      state.isLoadingMore = false;
    })
    builder.addCase(fetchSearchMoreList.rejected, (state) => {
      state.isLoadingMore = false;
    })
  }
})

const { actions, reducer } = catalogSlice;
export const { } = actions;

export default reducer;
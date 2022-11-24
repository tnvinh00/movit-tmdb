import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TMDBApi from 'api/tmdbApi';
import { CATEGORY, MOVIETYPE } from 'constants/apiConstant';

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async (payload: any) => {
    const { page } = payload;
    const response = await TMDBApi.getMoviesList(MOVIETYPE.POPULAR, { page });
    return response;
  }
);

export const fetchTopRatedMovies = createAsyncThunk(
  'movies/fetchTopRatedMovies',
  async (payload: any) => {
    const { page } = payload;
    const response = await TMDBApi.getMoviesList(MOVIETYPE.TOP_RATED, { page });
    return response;
  }
);

export const fetchNowPlayingMovies = createAsyncThunk(
  'movies/fetchNowPlayingMovies',
  async (payload: any) => {
    const { page } = payload;
    const response = await TMDBApi.getMoviesList(MOVIETYPE.NOW_PLAYING, { page });
    return response;
  }
);

export const fetchDetail = createAsyncThunk(
  'movies/fetchDetail',
  async (payload: any) => {
    const { category, id } = payload;
    const response = await TMDBApi.getDetail(category, id);
    return response;
  }
);

export const getMovieVideo = createAsyncThunk(
  'movies/getMovieVideo',
  async (payload: any) => {
    const { id } = payload;
    const response = await TMDBApi.getVideos(CATEGORY.MOVIE, id);
    return response;
  }
);

const initialState: any = {
  popularMovies: [],
  topRatedMovies: [],
  nowPlayingMovies: [],
  upcomingMovies: [],
  movie: {},
  isLoading: false,
  isLoadingVideo: false,
  isLoadingDetail: false,
  isLoadingMore: false,
  error: false,
  page: 1,
};

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.popularMovies = action.payload.data.results;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload.data.results;
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.nowPlayingMovies = action.payload.data.results;
      })
      .addCase(fetchDetail.pending, (state) => {
        state.isLoadingDetail = true;
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.isLoadingDetail = false;
        state.movie = {
          ...state.movie,
          ...action.payload.data,
        };
      })
      .addCase(fetchDetail.rejected, (state) => {
        state.isLoadingDetail = false;
        state.error = true;
      })
      .addCase(getMovieVideo.pending, (state) => {
        state.isLoadingVideo = true;
      })
      .addCase(getMovieVideo.fulfilled, (state, action) => {
        state.isLoadingVideo = false;
        state.movie.videos = action.payload.data.results;
      })
      .addCase(getMovieVideo.rejected, (state) => {
        state.isLoadingVideo = false;
        state.error = true;
      });
  },
});

const { actions, reducer } = moviesSlice;

export const { setMovie } = actions;
export default reducer;

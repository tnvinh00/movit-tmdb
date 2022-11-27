import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import TMDBApi from 'api/tmdbApi';
import { MOVIETYPE } from 'constants/apiConstant';
import MovieModel from 'models/movie.model';

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

export const fetchUpComingMovies = createAsyncThunk(
  'movies/fetchUpComingMovies',
  async (payload: any) => {
    const { page } = payload;
    const response = await TMDBApi.getMoviesList(MOVIETYPE.UPCOMING, { page });
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

export const fetchSimilarMovie = createAsyncThunk(
  'movies/fetchSimilarMovie',
  async (payload: any) => {
    const { id, category, page } = payload;
    const response = await TMDBApi.similar(category, id, { page });
    return response;
  },
);

export const fetchRecommendMovie = createAsyncThunk(
  'movies/fetchRecommendMovie',
  async (payload: any) => {
    const { id, category, page } = payload;
    const response = await TMDBApi.getRecommendations(category, id, { page });
    return response;
  },
);

export const getMovieVideo = createAsyncThunk(
  'movies/getMovieVideo',
  async (payload: any) => {
    const { category, id } = payload;
    const response = await TMDBApi.getVideos(category, id);
    return response;
  }
);

export const getMovieCredits = createAsyncThunk(
  'movies/getMovieCredits',
  async (payload: any) => {
    const { category, id } = payload;
    const response = await TMDBApi.getCredit(category, id);
    return response;
  }
);

export interface MovieState {
  popularMovies: MovieModel[];
  topRatedMovies: MovieModel[];
  nowPlayingMovies: MovieModel[];
  upcomingMovies: MovieModel[];
  similarMovies: MovieModel[];
  recommendMovies: MovieModel[];
  movie: MovieModel;
  isLoading: boolean;
  isLoadingVideo: boolean;
  isLoadingDetail: boolean;
  isLoadingMore: boolean;
  error: boolean;
  page: number;
}

const initialState: MovieState = {
  popularMovies: [],
  topRatedMovies: [],
  nowPlayingMovies: [],
  upcomingMovies: [],
  similarMovies: [],
  recommendMovies: [],
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
      .addCase(fetchUpComingMovies.fulfilled, (state, action) => {
        state.upcomingMovies = action.payload.data.results;
      })
      .addCase(fetchSimilarMovie.fulfilled, (state, action) => {
        state.similarMovies = action.payload.data.results;
      })
      .addCase(fetchRecommendMovie.fulfilled, (state, action) => {
        state.recommendMovies = action.payload.data.results;
      })
      .addCase(fetchDetail.pending, (state) => {
        state.isLoadingDetail = true;
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.movie = {
          ...state.movie,
          ...action.payload.data,
        };
        state.isLoadingDetail = false;
      })
      .addCase(fetchDetail.rejected, (state) => {
        state.isLoadingDetail = false;
        state.error = true;
      })
      .addCase(getMovieVideo.pending, (state) => {
        state.isLoadingVideo = true;
      })
      .addCase(getMovieVideo.fulfilled, (state, action) => {
        state.movie.videos = action.payload.data.results;
        state.isLoadingVideo = false;
      })
      .addCase(getMovieVideo.rejected, (state) => {
        state.isLoadingVideo = false;
        state.error = true;
      })
      .addCase(getMovieCredits.fulfilled, (state, action) => {
        state.movie.cast = action.payload.data.cast;
        state.isLoadingVideo = false;
      })
  },
});

const { actions, reducer } = moviesSlice;

export const { setMovie } = actions;
export default reducer;

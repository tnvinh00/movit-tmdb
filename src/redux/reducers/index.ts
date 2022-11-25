import moviesReducer from './moviesReducer';
import catalogReducer from './catalogReducer';

export const rootReducer = {
  movies: moviesReducer,
  catalog: catalogReducer,
};
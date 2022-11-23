import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from 'hooks'
import { fetchPopularMovies, fetchTopRatedMovies, fetchNowPlayingMovies } from 'redux/reducers/moviesReducer';
import HomeSlide from 'components/slides/homeSlide';
import { RootState } from 'redux/store';
import MovieSlide from 'components/slides/movieSlide';
import BlockQuote from '../components/blockQuote/blockQuote';

const HomePage = () => {

  const dispath = useAppDispatch();

  const { popularMovies, topRatedMovies, nowPlayingMovies } = useAppSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispath(fetchPopularMovies({
      page: 1,
    }));
    dispath(fetchTopRatedMovies({
      page: 1,
    }));
    dispath(fetchNowPlayingMovies({
      page: 1,
    }));
  }, []);

  return (
    <div>
      <HomeSlide items={popularMovies.slice(0, 10)} />
      {/* Trending */}

      <div className="container">
        <BlockQuote>
          <h1 className='mx-4 text-2xl font-bold dark:text-white text-gray-800'>Trending Movies</h1><i className='bx bx-trending-up text-2xl'></i>
        </BlockQuote>
        <MovieSlide items={popularMovies.slice(10)} />

        <BlockQuote>
          <h1 className='mx-4 text-2xl font-bold dark:text-white text-gray-800'>Top Rated Movies</h1><i className='bx bxs-star text-2xl'></i>
        </BlockQuote>
        <MovieSlide items={topRatedMovies} />

        <BlockQuote>
          <h1 className='mx-4 text-2xl font-bold dark:text-white text-gray-800'>Now Playing</h1><i className='bx bx-play text-2xl'></i>
        </BlockQuote>
        <MovieSlide items={nowPlayingMovies} />
      </div>
    </div>
  )
}

export default HomePage
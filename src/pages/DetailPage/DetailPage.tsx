import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import { RootState } from 'redux/store';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchDetail, getMovieVideo, getMovieCredits, fetchSimilarMovie, fetchRecommendMovie } from 'redux/reducers/moviesReducer';
import API_CONFIG from 'api/apiConfig';
import './DetailPage.scss';
import LoadingSpinner from 'components/loadingSpinner/loadingSpinner';
import momment from 'moment';
import BlockQuote from 'components/blockQuote/blockQuote';
import MovieSlide from 'components/slides/movieSlide';
import CastCard from 'components/cards/castCard';
import VideoBlock from 'components/videoBlock/videoBlock';

const DetailPage = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const { movie, isLoadingDetail, similarMovies, recommendMovies } = useAppSelector((state: RootState) => state.movies);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id === 'search') {
      navigate('/' + category);
      return;
    }
    dispatch(fetchDetail({
      id: Number(id),
      category: category
    }));

    if (!movie?.videos || movie.id !== Number(id)) {
      dispatch(getMovieVideo({
        id: Number(id),
        category: category
      }))
    }
    if (!movie?.cast || movie.id !== Number(id)) {
      dispatch(getMovieCredits({
        id: Number(id),
        category: category
      }));
    }
    dispatch(fetchSimilarMovie({
      id: Number(id),
      category: category
    }));
    dispatch(fetchRecommendMovie({
      id: Number(id),
      category: category
    }));
  }, [category, id]);

  return (
    <div className='movie-detail'>
      {isLoadingDetail ? (
        <LoadingSpinner className='h-screen' />
      ) : movie.id && (
        <>
          <div
            className="bg-center bg-no-repeat bg-cover h-[40rem] movie-detail__bg"
            style={{ backgroundImage: `url(${API_CONFIG.originalImage(movie?.backdrop_path || movie?.poster_path)})` }}>
            <div className='w-full h-full'></div>
          </div>

          <div className="movie-detail__info mt-[-20rem] pb-16">
            <div className="flex container flex-wrap">
              <div className='w-full md:w-[40%] pr-8 hidden md:flex'>
                <img className='rounded-2xl' src={API_CONFIG.w500Image(movie?.poster_path)} alt="" />
              </div>
              <div className='w-full md:w-[60%]'>
                <h1 className='text-5xl md:text-6xl font-bold mb-4'>{movie.title || movie.name}</h1>
                {movie.title !== movie.original_title && (
                  <h2 className='text-2xl md:text-2xl font-bold mb-8'>({movie.original_title})</h2>
                )}
                <div className='flex mb-4'>
                  {movie.genres && movie.genres.slice(0, 5).map(genre => (
                    <span key={genre.id} className="px-5 py-2 rounded-full border-2 shadow hover:shadow-white mr-2">
                      {genre.name}
                    </span>
                  ))}
                </div>
                <div className="flex items-center mb-4">
                  <span className='text-base text-gray-300 mr-2'>
                    <i className='bx bxs-star text-yellow-500'></i> {movie.vote_average} ({movie.vote_count})
                  </span>
                  &#x2022;
                  <span className='text-base text-gray-300 ml-2' title={movie.release_date}>
                    {momment(movie.release_date).fromNow()}
                  </span>
                </div>
                <p className='text-base font-medium'>{movie.overview}</p>
                <h2 className='text-xl font-bold my-4'>Casts</h2>
                <div className="inline-flex">
                  {movie.cast && movie.cast.slice(0, 5).map(cast => (
                    <CastCard cast={cast} key={cast.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {
              movie.videos && movie.videos.slice(0, 5).map(video => (
                <VideoBlock video={video} key={video.id} />
              ))
            }

            <BlockQuote>
              <h1 className='mx-4 text-2xl font-bold dark:text-white text-gray-800'>
                Similar Movies
              </h1>
              <i className='bx bx-film text-2xl'></i>
            </BlockQuote>
            <MovieSlide items={similarMovies} />

            <BlockQuote>
              <h1 className='mx-4 text-2xl font-bold dark:text-white text-gray-800'>
                Recommend for you
              </h1>
              <i className='bx bx-badge-check text-2xl'></i>
            </BlockQuote>
            <MovieSlide items={recommendMovies} />
          </div>
        </>
      )}
    </div>
  )
}

export default DetailPage
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import { RootState } from 'redux/store';
import { useParams } from 'react-router-dom';
import { fetchDetail } from 'redux/reducers/moviesReducer';
import API_CONFIG from 'api/apiConfig';
import './DetailPage.scss';
import LoadingSpinner from 'components/loadingSpinner/loadingSpinner';
import momment from 'moment';

const DetailPage = () => {
  const { category, id } = useParams();
  const { movie, isLoadingDetail } = useAppSelector((state: RootState) => state.movies);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDetail({
      id: Number(id),
      category: category
    }));
  }, [category, id]);

  return (
    <div className='movie-detail'>
      {isLoadingDetail ? (
        <LoadingSpinner />
      ) : (
        <>
          <div
            className="bg-center bg-no-repeat bg-cover h-[40rem] movie-detail__bg"
            style={{ backgroundImage: `url(${API_CONFIG.originalImage(movie?.backdrop_path || movie?.poster_path)})` }}>
            <div className='w-full h-full'></div>
          </div>

          <div className="movie-detail__info mt-[-15rem] pb-16">
            <div className="flex container flex-wrap">
              <div className='w-full md:w-[40%] px-8 hidden md:flex'>
                <img className='rounded-2xl' src={API_CONFIG.w500Image(movie.poster_path)} alt="" />
              </div>
              <div className='w-full md:w-[60%] px-8'>
                <h1 className='text-5xl font-bold mb-8'>{movie.title}</h1>
                <div className='flex mb-4'>
                  {movie.genres && movie.genres.slice(0, 5).map((genre: any, i: number) => (
                    <span key={i} className="px-4 py-2 rounded-full border-2 shadow shadow-white mr-2">{genre.name}</span>
                  ))}
                </div>
                <div className="flex items-center mb-4">
                  <span className='text-base text-gray-300 mr-2'>
                    <i className='bx bxs-star text-yellow-500'></i> {movie.vote_average} ({movie.vote_count})
                  </span>
                  &#x2022;
                  <span className='text-base text-gray-300  ml-2'>
                    {momment(movie.release_date).fromNow()}
                  </span>
                </div>
                <p className='text-base font-medium'>{movie.overview}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default DetailPage
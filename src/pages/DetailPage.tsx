import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import { RootState } from 'redux/store';
import { useParams } from 'react-router-dom';
import { fetchDetail } from 'redux/reducers/moviesReducer';
import API_CONFIG from 'api/apiConfig';
import LoadingSpinner from '../components/loadingSpinner/loadingSpinner';

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
    <div>
      {isLoadingDetail ? (
        <LoadingSpinner />
      ) : (
        <div
        className="bg-center bg-no-repeat bg-cover h-[40rem]"
        style={{ backgroundImage: `url(${API_CONFIG.originalImage(movie?.backdrop_path || movie?.poster_path)})` }}>
          <div className="from-slate-400 bg-opacity-50 h-full"></div>
        </div>

      )}
    </div>
  )
}

export default DetailPage
import API_CONFIG from 'api/apiConfig';
import MovieModel from 'models/movie.model';
import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';
import momment from 'moment';

export interface IMovieCardProps {
  item: MovieModel;
  category?: string;
  showRate?: boolean;
}

const MovieCard = (props: IMovieCardProps) => {
  const { item, category, showRate } = props;

  return (
    <Link to={`/${category}/${item.id}`}>
      <div className="mb-6">
        <div
          className="movie-card relative bg-top bg-cover bg-no-repeat mb-4 rounded-md h-96 md:h-80 hover:scale-105 transition-all duration-300"
          style={{ backgroundImage: `url(${API_CONFIG.w500Image(item.poster_path || item.backdrop_path)})` }}
        >
          <div className="movie-card__play hidden shadow-2xl items-center justify-center h-full">
            <i className='bx bxl-youtube text-6xl'></i>
          </div>
        </div>
        {showRate &&<div className="flex items-center justify-between mb-2">
          <span className='text-sm md:text-xs text-gray-600 dark:text-gray-400'>
            <i className='bx bxs-star text-yellow-500'></i> {item.vote_average} ({item.vote_count})
          </span>
          <span className='text-sm md:text-xs text-gray-600 dark:text-gray-400'>
            {momment(item.release_date).fromNow()}
          </span>
        </div>}
        <h2 className='text-lg font-bold text-gray-900 dark:text-white'>
          {item.title || item.name} {item.title !== item.original_title && `(${item.original_title})`}
        </h2>
      </div>
    </Link>
  )
}

MovieCard.defaultProps = {
  category: 'movie',
  showRate: true,
  item: []
}

export default MovieCard
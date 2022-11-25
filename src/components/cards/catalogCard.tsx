import MovieModel from 'models/movie.model';
import React from 'react';
import API_CONFIG from 'api/apiConfig';
import { Link } from 'react-router-dom';

export interface ICatalogCardProps {
  item: MovieModel;
  category?: string;
}

const CatalogCard = (props: ICatalogCardProps) => {
  const { item, category } = props;
  return (
    <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2.5 catalog-card '>
      <Link to={`/${category}/${item.id}`}>
        <div
          className="relative bg-top bg-cover bg-no-repeat mb-4 rounded-md h-96 sm:h-80 md:h-72 lg:h-80 hover:scale-105 transition-all duration-300"
          style={{ backgroundImage: `url(${API_CONFIG.w500Image(item.poster_path || item.backdrop_path)})` }}
        >
          <div className="catalog-card__play hidden shadow-2xl items-center justify-center h-full">
            <i className='bx bxl-youtube text-6xl'></i>
          </div>
          <div className="absolute inset-x-0 z-10 bottom-0 catalog-card__overlay text-center p-3 hidden transition-all duration-200">
            <span className='text-gray-600 dark:text-gray-400'>
              <i className='bx bxs-star text-yellow-500'></i> {item.vote_average} ({item.vote_count})
            </span>
          </div>

        </div>
        <h2 className='text-xl font-medium mb-8 text-black dark:text-white'>{item.title || item.name}</h2>
      </Link>
    </div>
  )
}

export default CatalogCard
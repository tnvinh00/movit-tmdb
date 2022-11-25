import { CastModel } from 'models/movie.model';
import React from 'react';
import API_CONFIG from 'api/apiConfig';

export interface ICastCardProps {
  cast: CastModel;
}

const CastCard = (props: ICastCardProps) => {
  const { cast } = props;

  return (
    <div className='pr-3 w-28 md:w-32'>
      <img src={API_CONFIG.w500Image(cast?.profile_path)} className='w-full rounded-md' alt="" />
      <h2 className='py-2 text-base md:text-lg text-black dark:text-white'>{cast.name}</h2>
    </div>
  )
}

export default CastCard;
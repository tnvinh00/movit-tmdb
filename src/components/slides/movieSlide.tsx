import MovieCard from 'components/cards/movieCard';
import MovieModel from 'models/movie.model';
import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';

export interface IMovieSlideProps {
  items: MovieModel[];
};

const MovieSlide = (props: IMovieSlideProps) => {
  const { items } = props;
  return (
    <Swiper
      grabCursor={true}
      spaceBetween={10}
      slidesPerView={4}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 6,
          spaceBetween: 60,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <MovieCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
};

MovieSlide.defaultProps = {
  items: []
};

export default MovieSlide;
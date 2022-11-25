import MovieCard from 'components/cards/movieCard';
import MovieModel from 'models/movie.model';
import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';

export interface IMovieSlideProps {
  items: MovieModel[];
  showRate?: boolean;
};

const MovieSlide = (props: IMovieSlideProps) => {
  const { items, showRate } = props;
  return (
    <Swiper
      grabCursor={true}
      spaceBetween={10}
      slidesPerView={4}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 2,
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
          spaceBetween: 20,
        },
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <MovieCard item={item} showRate={showRate} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
};

MovieSlide.defaultProps = {
  items: [],
  showRate: true,
};

export default MovieSlide;
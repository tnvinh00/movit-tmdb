import React, { useState, useRef, useEffect } from 'react'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './homeSlide.scss';
import MovieModel from 'models/movie.model';
import { useNavigate } from 'react-router-dom';
import Button from 'components/button/button';
import API_CONFIG from 'api/apiConfig';
import { CATEGORY } from 'constants/apiConstant';
import Modal from 'components/modal/modal';
import { useAppSelector, useAppDispatch } from 'hooks';
import { RootState } from 'redux/store';
import { getMovieVideo, setMovie } from 'redux/reducers/moviesReducer';
import 'swiper/css';
import LoadingSpinner from '../loadingSpinner/loadingSpinner';

export interface IHomeSlideProps {
  items: MovieModel[];
}

const HomeSlide = (props: IHomeSlideProps) => {
  const { items } = props;
  const [showModal, setShowModal] = useState(false);
  const { movie, isLoadingVideo } = useAppSelector((state: RootState) => state.movies);

  const swiperRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    if (showModal && !isLoadingVideo) {
      const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
      iframeRef.current.setAttribute('height', height);
    }
  }, [showModal, isLoadingVideo]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  SwiperCore.use([Autoplay]);

  const onClickWatch = (item: MovieModel) => {
    dispatch(setMovie(item));
    dispatch(getMovieVideo({
      id: item.id,
      category: CATEGORY.MOVIE
    }));
    navigate('/movie/' + item.id)
  };

  const onClickTrailer = (item: MovieModel) => {
    if (movie.id !== item.id) {
      dispatch(setMovie(item));
      dispatch(getMovieVideo({
        id: item.id,
        category: CATEGORY.MOVIE
      }));
    }
    swiperRef.current.swiper.autoplay.stop();
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
    swiperRef.current.swiper.autoplay.start();
  };

  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        loop={true}
        slidesPerView={1}
        className='min-h-[32rem] md:min-[80vh]'
        autoplay={{
          delay: 6000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
      >
        {
          items.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <div
                  className={'relative bg-cover bg-no-repeat bg-center home-slide__item ' + (isActive ? 'active' : '')}
                  style={{ backgroundImage: `url(${API_CONFIG.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)})` }}
                >
                  <div className='home-slide__item__overlay px-5 md:px-20 pt-40 pb-20'>
                    <div className="flex items-center justify-center relative">
                      <div className="md:w-2/4 w-full py-5 home-slide__item__content">
                        <h2 className="text-4xl md:text-6xl font-bold mb-12">{item.title}</h2>
                        <p className="text-base font-medium leading-5 mb-8">{item.overview}</p>
                        <div className="btns flex">
                          <Button
                            rounded
                            classes='mr-4'
                            onClick={() => onClickWatch(item)}
                            icon={<i className='bx bx-play-circle mr-2'></i>}
                            label="Watch now" />
                          <Button rounded outline onClick={() => onClickTrailer(item)} label="Trailer" />
                        </div>
                      </div>
                      <div className="hidden md:flex md:flex-1 items-center justify-center relative home-slide__item__image">
                        <img className='shadow-2xl rounded-lg' src={API_CONFIG.w500Image(item.poster_path)} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Modal
        open={showModal}
        onClickClose={onCloseModal}
      >
        {isLoadingVideo ? (
          <LoadingSpinner isLoading={true} className="py-5" />
        ) : (movie?.id && movie?.videos && <iframe
          width="100%"
          src={`https://www.youtube.com/embed/${movie?.videos[0].key}`}
          title="YouTube video player"
          frameBorder="0"
          ref={iframeRef}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        )}
      </Modal>
    </>
  )
};

// const HomeSlideItem = (props: any) => {
//   let history = useHistory();

//   const { item, className } = props;

//   const background = API_CONFIG.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

//   const setModalActive = async () => {
//     const modal = document.querySelector(`#modal_${item.id}`);

//     const videos = await TMDBApi.getVideos(CATEGORY.MOVIE, item.id);

//     if (videos.results.length > 0) {
//       const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
//       modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
//     } else {
//       modal.querySelector('.modal__content').innerHTML = 'No trailer';
//     }

//     modal.classList.toggle('active');
//   }

//   return (

//   )
// };

export default HomeSlide
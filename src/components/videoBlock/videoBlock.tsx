import { VideoModel } from 'models/movie.model';
import React, { useEffect, useRef } from 'react'

export interface IVideoBlockProps {
  video: VideoModel;
}

const VideoBlock = (props: IVideoBlockProps) => {
  const { video } = props;
  const iframeRef = useRef(null);

  useEffect(() => {
    const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
    iframeRef.current.setAttribute('height', height);
  }, []);

  return (
    <div className='mt-20'>
      <h2 className='text-2xl md:text-3xl text-black dark:text-white my-4'>{video.name}</h2>
      <iframe
        src={`https://www.youtube.com/embed/${video.key}`}
        width="100%"
        ref={iframeRef}
        title="video"
      ></iframe>
    </div>
  )
}

export default VideoBlock
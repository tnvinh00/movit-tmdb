import React from 'react';
import NotFoundImg from 'assets/images/404.png';

const NotFoundPage = () => {
  return (
    <div
      className='bg-no-repeat bg-cover bg-center w-full h-screen'
      style={{
        backgroundImage: `url(${NotFoundImg})`,
      }}
    >
      <div className="bg-black bg-opacity-40 h-full"></div>
    </div >
  )
}

export default NotFoundPage
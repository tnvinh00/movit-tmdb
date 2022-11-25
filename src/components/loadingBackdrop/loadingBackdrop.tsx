import React, { useEffect } from 'react';
import './loadingBackdrop.scss';

export interface ILoadingBackdropProps {
  loading?: boolean;
}

const LoadingBackdrop = (props: ILoadingBackdropProps) => {
  const { loading } = props;

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'overlay';
    }
  }, [loading]);

  return (
    loading && (
      <div className='loading-backdrop fixed inset-0 z-50 flex items-center justify-center bg-black opacity-70'>
        <div className="flex items-center justify-center w-40 h-40 md:w-80 md:h-80">
          <div className="blue-orbit leo">
          </div>

          <div className="green-orbit leo">
          </div>

          <div className="red-orbit leo">
          </div>

          <div className="white-orbit w1 leo">
          </div><div className="white-orbit w2 leo">
          </div><div className="white-orbit w3 leo">
          </div>
        </div>
      </div>
    )
  )
}

LoadingBackdrop.defaultProps = {
  loading: false
}

export default LoadingBackdrop
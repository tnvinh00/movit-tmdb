import React from 'react';

export interface ILoadingSpinnerProps {
  isLoading?: boolean;
  className?: string;
}

const LoadingSpinner = (props: ILoadingSpinnerProps) => {
  const { isLoading, className } = props;
  return (
    isLoading && (
      <div className={`loading-spinner flex items-center justify-center w-full ${className}`}>
        <i className='bx bx-loader-alt bx-spin bx-md'></i>
      </div>
    )
  )
}

LoadingSpinner.defaultProps = {
  isLoading: true,
  className: 'py-8'
}

export default LoadingSpinner
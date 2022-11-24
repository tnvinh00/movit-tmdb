import React from 'react';

const LoadingSpinner = (props: any) => {
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
import React, { useMemo } from 'react';

export type TypeButtonColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

export interface IButtonProps {
  label: string;
  onClick?: any;
  outline?: boolean;
  color?: TypeButtonColor;
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  roundedSize?: string;
  icon?: React.ReactNode;
  minWidth?: string;
  iconPosition?: 'left' | 'right';
  classes?: string;
  size?: 'small' | 'medium' | 'large';
};

const Button = (props: IButtonProps) => {
  const {
    label,
    onClick,
    outline,
    color,
    shadow,
    rounded,
    classes,
    minWidth,
    disabled,
    roundedSize,
    icon,
    loading,
    iconPosition,
    size,
  } = props;

  const className = useMemo(() => {
    let buttonClass = '';
    if (outline) {
      switch (color) {
        case 'primary':
          buttonClass += 'text-blue-700 hover:text-white border-2 border-blue-700 hover:bg-blue-800 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 ';
          break;
        case 'secondary':
          buttonClass += 'text-gray-700 hover:text-white border-2 border-gray-700 hover:bg-gray-800 text-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 ';
          break;
        case 'success':
          buttonClass += 'text-green-700 hover:text-white border-2 border-green-700 hover:bg-green-800 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 ';
          break;
        case 'danger':
          buttonClass += 'text-red-700 hover:text-white border-2 border-red-700 hover:bg-red-800 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 ';
          break;
        case 'warning':
          buttonClass += 'text-yellow-700 hover:text-white border-2 border-yellow-700 hover:bg-yellow-800 text-center dark:border-yellow-500 dark:text-yellow-500 dark:hover:text-white dark:hover:bg-yellow-600 ';
          break;
        case 'info':
          buttonClass += 'text-blue-700 hover:text-white border-2 border-blue-700 hover:bg-blue-800 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 ';
          break;
        case 'light':
          buttonClass += 'text-gray-200 hover:text-white border-2 border-gray-200 hover:bg-gray-800 text-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 ';
          break;
        case 'dark':
          buttonClass += 'text-gray-800 hover:text-white border-2 border-gray-800 hover:bg-gray-800 text-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-600 ';
          break;
      }
    } else {
      switch (color) {
        case 'primary':
          buttonClass += 'text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 '
          break;
        case 'secondary':
          buttonClass += 'text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 '
          break;
        case 'success':
          buttonClass += 'text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 '
          break;
        case 'danger':
          buttonClass += 'text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 '
          break;
        case 'warning':
          buttonClass += 'text-white bg-yellow-700 hover:bg-yellow-800 dark:bg-yellow-600 dark:hover:bg-yellow-700 '
          break;
        case 'info':
          buttonClass += 'text-white bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 '
          break;
        case 'light':
          buttonClass += 'text-gray-800 bg-gray-200 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 '
          break;
        case 'dark':
          buttonClass += 'text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800 '
          break;
      };
    }
    buttonClass += rounded ? roundedSize ? `rounded-${roundedSize} ` : 'rounded ' : ''
    buttonClass += size === 'small' ? 'px-3 py-2 text-xs ' : size === 'large' ? 'px-6 py-3.5 text-lg ' : 'px-5 py-2.5 text-base ';
    buttonClass += (disabled || loading) ? 'opacity-50 cursor-not-allowed ' : 'cursor-pointer ';
    buttonClass += shadow ? 'shadow-2xl ' : '';
    buttonClass += 'inline-flex items-center justify-center font-medium ' + classes;
    return buttonClass;
  }, [color, outline, rounded, roundedSize, size, classes, disabled, loading, shadow]);

  return (
    <button
      type='button'
      className={className}
      disabled={loading || disabled}
      onClick={onClick}
      style={{ minWidth: minWidth }}
    >
      {iconPosition === 'left' && icon}
      {label && label}
      {iconPosition === 'right' && icon}
      {loading && <i className='bx bx-loader bx-spin ml-2'></i>}
    </button>
  )
};

Button.defaultProps = {
  label: '',
  onClick: () => { },
  outline: false,
  color: 'danger',
  rounded: false,
  disabled: false,
  roundedSize: '',
  icon: '',
  loading: false,
  iconPosition: 'left',
  size: 'medium',
  shadow: true,
  classes: '',
  minWidth: '150px',  
};

export default Button;
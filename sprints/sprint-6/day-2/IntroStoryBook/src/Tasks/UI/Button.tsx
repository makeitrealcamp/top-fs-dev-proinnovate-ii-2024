import React from 'react';
import classNames from 'classnames';

// clx /...merge

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  intent?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'regular' | 'small';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  intent = 'primary',
  size = 'regular',
  disabled = false,
  children = 'Button',
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2';

  const intents = {
    primary:
      'text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:ring-blue-500 dark:bg-red-500 dark:hover:bg-blue-600 dark:active:bg-blue-700',
    secondary:
      'text-white bg-gray-600 hover:bg-gray-700 active:bg-gray-800 focus:ring-gray-500 dark:bg-gray-500 dark:hover:bg-gray-600 dark:active:bg-gray-700',
    tertiary:
      'text-gray-700 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 focus:ring-gray-300 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:active:bg-gray-500',
    outline:
      'text-blue-600 border border-blue-600 hover:bg-blue-50 active:bg-blue-100 focus:ring-blue-500 dark:text-blue-500 dark:border-blue-500 dark:hover:bg-gray-800 dark:active:bg-gray-700',
  };

  const sizes = {
    regular: 'px-4 py-2 text-sm',
    small: 'px-3 py-1 text-xs',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const classes = classNames(
    baseStyles,
    intents[intent],
    sizes[size],
    disabled && disabledStyles,
    className
  );

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

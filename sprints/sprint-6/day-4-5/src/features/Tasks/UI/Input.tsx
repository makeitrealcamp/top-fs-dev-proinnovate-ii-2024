import React from 'react';
import classNames from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder = '',
  error,
  className,
  ...props
}) => {
  const baseStyles =
    'block w-full px-3 py-2 text-gray-900 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
  const errorStyles = 'border-red-500 focus:ring-red-500';
  const darkStyles = 'dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700';

  const inputClasses = classNames(
    baseStyles,
    error ? errorStyles : 'border-gray-300',
    darkStyles,
    className
  );

  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        className={inputClasses}
        placeholder={placeholder}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
};

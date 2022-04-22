import clsx from 'clsx';
import * as React from 'react';

const variants = {
  primary: 'bg-blue-600 text-white hover:bg-gray-50 hover:text-blue-600',
  inverse: 'bg-white text-blue-600 hover:bg-blue-600 hover:text-white',
  danger: 'bg-red-600 text-white hover:bg-red-50 hover:text-red-600',
};

const sizes = {
  sm: 'py-2 px-4 text-sm rounded-sm',
  md: 'py-2 px-6 text-md rounded',
  lg: 'py-3 px-8 text-lg rounded',
};

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', className = '', variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx('transition-colors', variants[variant], sizes[size], className)}
      >
        {props.children}
      </button>
    );
  }
);

import clsx from 'clsx';
import * as React from 'react';

const variants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-200 hover:text-primary-700',
  inverse: 'bg-white text-primary-600 hover:bg-primary-100',
  danger: 'bg-danger-600 text-white hover:bg-danger-200 hover:text-danger-700',
};

const sizes = {
  sm: 'py-2 px-4 text-sm rounded-sm',
  md: 'py-2 px-6 text-md rounded-lg',
  lg: 'py-3 px-8 text-lg rounded-lg',
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type = 'button', className = '', variant = 'primary', size = 'md', children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx('transition-colors border', variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

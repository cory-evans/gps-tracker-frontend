import clsx from 'clsx';
import * as React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx('transition-colors border rounded-lg px-2 py-1', className)}
        {...props}
      />
    );
  }
);

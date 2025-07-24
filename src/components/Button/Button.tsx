import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'rounded-lg',
    'border',
    'font-medium',
    'transition-colors-transform',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-offset-white',
    'dark:focus:ring-offset-gray-900',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
    'active:scale-95',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-600',
          'text-white',
          'border-primary-600',
          'hover:bg-primary-700',
          'hover:border-primary-700',
          'focus:ring-primary-500',
          'dark:bg-primary-500',
          'dark:border-primary-500',
          'dark:hover:bg-primary-600',
          'dark:hover:border-primary-600',
        ],
        secondary: [
          'bg-white',
          'text-secondary-900',
          'border-secondary-300',
          'hover:bg-secondary-50',
          'hover:text-secondary-900',
          'focus:ring-secondary-500',
          'dark:bg-secondary-800',
          'dark:text-secondary-100',
          'dark:border-secondary-600',
          'dark:hover:bg-secondary-700',
          'dark:hover:text-secondary-50',
        ],
        danger: [
          'bg-danger-600',
          'text-white',
          'border-danger-600',
          'hover:bg-danger-700',
          'hover:border-danger-700',
          'focus:ring-danger-500',
          'dark:bg-danger-500',
          'dark:border-danger-500',
          'dark:hover:bg-danger-600',
          'dark:hover:border-danger-600',
        ],
      },
      size: {
        sm: ['text-sm', 'px-3', 'py-1.5', 'min-h-[2rem]'],
        md: ['text-sm', 'px-4', 'py-2', 'min-h-[2.5rem]'],
        lg: ['text-base', 'px-6', 'py-3', 'min-h-[3rem]'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Button content */
  children: React.ReactNode;
  /** Loading state */
  loading?: boolean;
  /** Custom className */
  className?: string;
  /** Accessible label for screen readers when loading */
  loadingText?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      loading = false,
      disabled,
      className,
      loadingText = 'Loading',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={clsx(buttonVariants({ variant, size }), className)}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-describedby={loading ? `${props.id}-loading` : undefined}
        {...props}
      >
        {loading && (
          <>
            <Loader2 
              className="h-4 w-4 animate-spin" 
              aria-hidden="true"
            />
            <span className="sr-only" id={`${props.id}-loading`}>
              {loadingText}
            </span>
          </>
        )}
        <span className={loading ? 'opacity-70' : undefined}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
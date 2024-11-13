import { forwardRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const inputVariants = cva('block w-full rounded-md border-0', {
  variants: {
    inputSize: {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-2 py-1 text-sm',
      lg: 'px-2.5 py-1.5 text-sm',
      xl: 'px-3 py-2 text-sm',
      '2xl': 'px-3.5 py-2.5',
    },
  },
  defaultVariants: {
    inputSize: 'xl',
  },
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  description?: string;
  errorMessage?: string;
  inputSize?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl';
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, description, errorMessage, inputSize, className, ...rest } =
    props;

  const isErrored = !!errorMessage;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium font-AvenirNext leading-6 text-gray-900 mb-2"
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        aria-describedby="email-description"
        className={cn(
          inputVariants({ inputSize, className }),
          `placeholder:text-gray-400 text-gray-900 ${isErrored ? 'text-red-600' : 'text-gray-900'}
          shadow-sm ring-1 ring-inset ${isErrored ? 'ring-red-600' : 'ring-gray-300'}
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-brand sm:leading-6`
        )}
        {...rest}
      />
      {!isErrored && description && (
        <p
          id="email-description"
          className="mt-2 font-AvenirNext text-sm text-gray-500"
        >
          {description}
        </p>
      )}
      {isErrored && (
        <p
          id="email-error"
          className="mt-2 font-AvenirNext text-sm text-red-500"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };

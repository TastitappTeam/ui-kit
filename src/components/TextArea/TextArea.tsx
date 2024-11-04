import { forwardRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const textareaVariants = cva('block w-full rounded-md border-0', {
  variants: {
    textareaSize: {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-2 py-1 text-sm',
      lg: 'px-2.5 py-1.5 text-sm',
      xl: 'px-3 py-2 text-sm',
      '2xl': 'px-3.5 py-2.5',
    },
  },
  defaultVariants: {
    textareaSize: 'xl',
  },
});

export interface TextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label: string;
  description?: string;
  errorMessage?: string;
  textareaSize?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl';
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      label,
      description,
      errorMessage,
      textareaSize,
      className,
      ...rest
    } = props;

    const isErrored = !!errorMessage;

    return (
      <div className="w-full">
        <label
          htmlFor="text"
          className="block text-sm font-medium leading-6 text-gray-900 mb-2"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id="textarea"
          // name="email"
          type="text"
          placeholder="Description"
          aria-describedby="description"
          rows={4}
          className={cn(
            textareaVariants({ textareaSize, className }),
            `placeholder:text-gray-400 text-gray-900 ${isErrored ? 'text-red-600' : 'text-gray-900'}
            shadow-sm ring-1 ring-inset ${isErrored ? 'ring-red-600' : 'ring-gray-300'}
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-brand sm:leading-6`
          )}
          // className={clsx(
          //   `block w-full h-12 rounded-md border-0 py-1.5 px-3
          //   ${isErrored ? 'text-red-600' : 'text-gray-900'} shadow-sm
          //   ring-1 ring-inset ${isErrored ? 'ring-red-600' : 'ring-gray-300'}
          //   placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand
          //   sm:text-sm sm:leading-6`,
          //   className,
          // )}
          {...rest}
        />
        {!isErrored && description && (
          <p id="email-description" className="mt-2 text-sm text-gray-500">
            {description}
          </p>
        )}
        {isErrored && (
          <p id="email-error" className="mt-2 text-sm text-red-500">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea };

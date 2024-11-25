import React, { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

/*
 * Button component
 * Added 'gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0' to the button to automatically style icon inside the button.
 */
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-gray-700 font-AvenirNext font-medium rounded-md transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-white hover:bg-brand/85',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-100/80',
        outline: 'border border-gray-300 bg-white hover:bg-gray-100',
        ghost: 'hover:bg-gray-100 hover:text-gray-800',
        link: 'text-gray-900 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2 text-sm',
        sm: 'h-9 px-3 text-sm',
        lg: 'h-11 px-8 text-md',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant,
    className,
    asChild = false,
    size,
    children,
    ...rest
  } = props;

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      data-testid="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    >
      {children}
    </Comp>
  );
});

Button.displayName = 'Button';

export { Button };

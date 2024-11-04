import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-AvenirNext font-medium transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        flat: 'border-transparent',
        outline: 'border-gray-200',
      },
      color: {
        neutral: 'text-gray-800',
        gray: 'bg-gray-50 text-gray-600',
        red: 'bg-red-50 text-red-700',
        yellow: 'bg-yellow-50 text-yellow-800',
        green: 'bg-green-50 text-green-700',
        blue: 'bg-blue-50 text-blue-700',
        indigo: 'bg-indigo-50 text-indigo-700',
        purple: 'bg-purple-50 text-purple-700',
        pink: 'bg-pink-50 text-pink-700',
      },
    },
    defaultVariants: {
      variant: 'outline',
      color: 'neutral',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  color?:
    | 'neutral'
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink';
}

function Badge({
  color = 'neutral',
  className,
  children,
  variant = 'outline',
  ...props
}: BadgeProps) {
  interface BorderColorMap {
    [key: string]: string;
  }

  const colors: BorderColorMap = {
    neutral: 'border-gray-200',
    gray: 'border-gray-500/10',
    red: 'border-red-600/10',
    yellow: 'border-yellow-600/20',
    green: 'border-green-600/20',
    blue: 'border-blue-700/10',
    indigo: 'border-indigo-700/10',
    purple: 'border-purple-700/10',
    pink: 'border-pink-700/10',
  };

  const borderColor = variant === 'outline' ? colors[color] : '';

  return (
    <div
      className={cn(badgeVariants({ variant, color }), borderColor, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Badge, badgeVariants };

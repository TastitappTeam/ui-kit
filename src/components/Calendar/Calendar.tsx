'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';

import { cn } from '../../lib/utils';
import { buttonVariants } from '../Button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const CustomNavigation = ({
    onPreviousClick,
    onNextClick,
    previousMonth,
    nextMonth,
  }: {
    onPreviousClick?: React.MouseEventHandler<HTMLButtonElement>;
    onNextClick?: React.MouseEventHandler<HTMLButtonElement>;
    previousMonth?: Date;
    nextMonth?: Date;
  }) => (
    <div className="space-x-1 flex items-center relative">
      <button
        onClick={(event) => onPreviousClick && onPreviousClick(event)}
        disabled={!previousMonth}
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1'
        )}
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={(event) => onNextClick && onNextClick(event)}
        disabled={!nextMonth}
        className={cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1'
        )}
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col space-y-4 sm:space-x-0 sm:space-y-0 w-fit',
        month: 'space-y-4',
        month_caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center h-fit',
        button_previous: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1'
        ),
        button_next: cn(
          buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1'
        ),
        // nav_button_previous: 'absolute left-1',
        // nav_button_next: 'absolute right-1',
        month_grid: 'w-full border-collapse space-y-1',
        weekdays: 'flex',
        weekday: 'text-gray-200 rounded-md w-9 font-normal text-[0.8rem]',
        week: 'flex w-full mt-2',
        // cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 text-center text-sm p-0 relative aria-selected:opacity-100 [&:has([aria-selected].range-end)]:rounded-r-md [&:has([aria-selected].outside)]:bg-gray-100/50 [&:has([aria-selected])]:bg-gray-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20'
        ),
        range_end: 'day-range-end',
        selected:
          'bg-brand text-white hover:bg-brand hover:text-white focus:bg-brand focus:text-white',
        today: 'bg-gray-100 text-gray-900',
        outside:
          'day-outside text-muted-foreground opacity-50 aria-selected:bg-gray-100/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        disabled: 'text-muted-foreground opacity-50',
        range_middle: 'aria-selected:bg-gray-600 aria-selected:text-gray-900',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: (props) => {
          if (props.orientation === 'left') {
            return <ChevronLeft className="h-4 w-4" />;
          } else {
            return <ChevronRight className="h-4 w-4" />;
          }
        },
        Nav: CustomNavigation,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };

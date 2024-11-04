import type { Meta, StoryObj } from '@storybook/react';

import { CalendarIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { Button, Calendar, Input } from '../../components';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-gray-500">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <Input
              id="width"
              label="Width"
              defaultValue="100%"
              className="h-8"
            />
            <Input
              id="maxWidth"
              label="Max. width"
              defaultValue="300px"
              className="h-8"
            />
            <Input
              id="height"
              label="Height"
              defaultValue="25px"
              className="h-8"
            />
            <Input
              id="maxHeight"
              label="Max. height"
              defaultValue="none"
              className="h-8"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
  args: {},
};

export const DatePicker: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn('w-[280px] justify-start text-left font-normal')}
        >
          <CalendarIcon />
          Pick a date
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" />
      </PopoverContent>
    </Popover>
  ),
  args: {},
};

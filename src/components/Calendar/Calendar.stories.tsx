import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from './Calendar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const date = new Date();

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  // render: (args) => (
  //   <div className="w-full">
  //     <Calendar {...args} />
  //   </div>
  // ),
  args: {
    mode: 'single',
    className: 'rounded-md border',
    selected: date,
  },
};

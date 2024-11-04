import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  argTypes: {
    variant: {
      options: ['flat', 'outline'],
      control: { type: 'radio' },
    },
    color: {
      options: [
        'neutral',
        'gray',
        'red',
        'yellow',
        'green',
        'blue',
        'indigo',
        'purple',
        'pink',
      ],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
    color: 'neutral',
  },
};

export const Gray: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
    color: 'gray',
  },
};

export const Red: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
    color: 'red',
  },
};

export const Yellow: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
    color: 'yellow',
  },
};

export const Green: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
    color: 'green',
  },
};

export const Blue: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
    color: 'blue',
  },
};

export const Indigo: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
    color: 'indigo',
  },
};

export const Purple: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
    color: 'purple',
  },
};

export const Pink: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
    color: 'pink',
  },
};

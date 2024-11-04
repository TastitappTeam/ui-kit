import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from './Calendar';

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const date = new Date();

export const Default: Story = {
  args: {
    mode: 'single',
    className: 'rounded-md border',
    selected: date,
  },
};

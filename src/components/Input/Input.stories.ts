import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: 'E-mail',
    description: 'We will never share your email with anyone else.',
    inputSize: 'lg',
    className: 'w-96',
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    errorMessage: 'This field is required.',
  },
};

export const WithoutLabel: Story = {
  args: {
    ...Default.args,
    label: undefined,
  },
};

export const WithoutDescription: Story = {
  args: {
    ...Default.args,
    description: undefined,
  },
};

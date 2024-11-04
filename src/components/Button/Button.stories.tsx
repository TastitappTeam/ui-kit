import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from "@storybook/test";

import { ChevronLeft, Mail, Loader2 } from 'lucide-react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline', 'ghost', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
  args: {
    size: 'default',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

export const Icon: Story = {
  args: {
    children: <ChevronLeft strokeWidth={2} className="h-4 w-4" />,
    variant: 'outline',
    size: 'icon',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        Login with Email <Mail strokeWidth={2} />
      </>
    ),
    variant: 'primary',
  },
};

export const Loading: Story = {
  args: {
    children: (
      <>
        <Loader2 strokeWidth={2} className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </>
    ),
    variant: 'primary',
    disabled: true,
  },
};

export const AsChild: Story = {
  args: {
    children: <a href="">Login</a>,
    variant: 'primary',
    asChild: true,
  },
};

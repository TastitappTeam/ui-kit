import type { Meta, StoryObj } from '@storybook/react';

import { Drawer, DrawerContent, DrawerTrigger } from './Drawer';

import { Button } from '../Button';
import { Menu } from 'lucide-react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
  },
  args: {
    direction: 'bottom',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const LINKS = [
  { href: '#', title: 'Home' },
  { href: '#', title: 'About' },
  { href: '#', title: 'Services' },
  { href: '#', title: 'Contact' },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <>
        <DrawerTrigger asChild>
          <Button variant="ghost">
            <Menu className="w-6 h-6 text-gray-950" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[60svh] p-0">
          <div className="overflow-auto p-6">
            <div className="flex flex-col space-y-3">
              {LINKS.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-lg font-semibold text-gray-900"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </DrawerContent>
      </>
    ),
  },
};

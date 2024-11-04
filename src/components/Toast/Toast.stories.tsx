import type { Meta, StoryObj } from '@storybook/react';

import { Toast, toast } from './Toast';
import { Button } from '../Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Button onClick={() => toast.success('Uuurraa! This is a success CSS')}>
        Create Success Toast
      </Button>
      <Button
        onClick={() => {
          toast.error('Euhh! This is an error message!');
        }}
      >
        Create Error Toast
      </Button>
      <Button
        onClick={() => {
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
            loading: 'Chargement en cours...',
            success: 'Succès',
            error: 'Erreur',
          });
        }}
      >
        Create a Success Promise Toast
      </Button>
      <Button
        onClick={() => {
          toast.promise(
            new Promise((_resolve, reject) => setTimeout(reject, 1000)),
            {
              loading: 'Chargement en cours...',
              success: 'Succès',
              error: 'Erreur',
            }
          );
        }}
      >
        Create an Error Promise Toast
      </Button>
      <Button
        onClick={() => {
          toast('Hello World', { icon: '👏' });
        }}
      >
        Custom Icon Toast
      </Button>
      <Toast />
    </div>
  ),
};

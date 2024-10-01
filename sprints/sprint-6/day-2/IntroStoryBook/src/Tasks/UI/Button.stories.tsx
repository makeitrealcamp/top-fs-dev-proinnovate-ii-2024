import { StoryObj, Meta } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    intent: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'outline'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['regular', 'small'],
      },
    },
    children: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: 'primary',
    size: 'regular',
    disabled: false,
    children: 'Button',
  },
};

export const Secondary = {
  args: {
    intent: 'secondary',
    size: 'regular',
    disabled: false,
  },
};

export const Tertiary = {
  args: {
    intent: 'tertiary',
    size: 'regular',
    disabled: false,
  },
};

export const Outline = {
  args: {
    intent: 'outline',
    size: 'regular',
    disabled: false,
  },
};

export const Small = {
  args: {
    intent: 'primary',
    size: 'small',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    intent: 'primary',
    size: 'regular',
    disabled: true,
  },
};

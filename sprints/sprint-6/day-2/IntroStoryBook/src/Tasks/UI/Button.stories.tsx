import { StoryObj, Meta } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
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

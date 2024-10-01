import { StoryObj, Meta } from '@storybook/react';

import { TodoForm } from './TodoForm';

const meta: Meta<typeof TodoForm> = {
  title: 'Components/TodoForm',
  component: TodoForm,
};

export default meta;
type Story = StoryObj<typeof TodoForm>;

export const Default: Story = {};

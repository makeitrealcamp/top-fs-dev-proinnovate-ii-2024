import { expect, userEvent, within } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { TasksPage } from './TasksPage';
import { TaskContextProvider } from '../context/TaskContextProvider';

const meta = {
  title: 'Pages/TaskPage',
  component: TasksPage,
  decorators: [
    (Story) => (
      <TaskContextProvider>
        <Story />
      </TaskContextProvider>
    ),
  ],
} satisfies Meta<typeof TasksPage>;

export default meta;

type Story = StoryObj<typeof TasksPage>;

export const Default: Story = {};

export const incorrectSubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', { name: /Add Task/i });
    await userEvent.click(submitButton);
    await expect(canvas.getByText(/Task cannot be empty/i)).toBeInTheDocument();
  },
};


export const correctSubmit: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const submitButton = canvas.getByRole('button', { name: /Add Task/i });
        const input = canvas.getByRole('textbox');
        await userEvent.type(input, 'My new awesome Task');
        await userEvent.click(submitButton);
        await expect(canvas.getByText(/My new awesome Task/i)).toBeInTheDocument();
    },
};
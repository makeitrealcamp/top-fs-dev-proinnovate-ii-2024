import { StoryObj, Meta } from '@storybook/react';
import { TaskList } from './TasksList';



const meta: Meta<typeof TaskList> = {
  title: 'Components/TaskList',
  component: TaskList,
};

export default meta;
type Story = StoryObj<typeof TaskList>;

export const Default: Story = {};

export const WithTasks: Story = {
  args: {
    tasks: [
      { id: '1', name: 'Task 1' },
      { id: '2', name: 'Task 2' },
      { id: '3', name: 'Task 3' },
    ],
  },
};
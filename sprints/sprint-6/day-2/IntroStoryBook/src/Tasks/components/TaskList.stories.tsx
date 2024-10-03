import { StoryObj, Meta } from '@storybook/react';
import { TaskList } from './TasksList';
import { TaskContextProvider } from '../context/TaskContextProvider';

const mockTasks = [
  { id: 1, title: 'Task 1', completed: true },
  { id: 2, title: 'Task 2', completed: false },
  { id: 3, title: 'Task 3', completed: false },
];

const meta: Meta<typeof TaskList> = {
  title: 'Components/TaskList',
  component: TaskList,
  decorators: [
    (Story) => (
      <TaskContextProvider initialTasks={mockTasks}>
        <Story />
      </TaskContextProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TaskList>;

export const Default: Story = {};

export const WithTasks: Story = {};

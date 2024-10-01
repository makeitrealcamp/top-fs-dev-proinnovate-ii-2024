import { StoryObj, Meta } from '@storybook/react';
import { TaskList } from './TasksList';



const meta: Meta<typeof TaskList> = {
  title: 'Components/TaskList',
  component: TaskList,
};

export default meta;
type Story = StoryObj<typeof TaskList>;

export const Default: Story = {};

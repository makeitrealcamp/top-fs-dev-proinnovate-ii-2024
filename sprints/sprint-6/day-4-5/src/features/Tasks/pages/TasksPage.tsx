
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TasksList';

export const TasksPage = () => {
  return (
    <div>
      <h2>Tasks Page</h2>
      <TaskForm />
      <TaskList />
    </div>
  );
};

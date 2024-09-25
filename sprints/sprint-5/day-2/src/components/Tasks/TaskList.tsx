import { TaskCard } from './TaskCard';
import { Task } from './Tasks.types';

export const TaskList = ({ tasks }: { tasks: Task[] | undefined }) => {
  if (!tasks?.length) {
    return <div>No tasks</div>;
  }
  return (
    <div className="flex flex-col ">
      <h2>TaskList</h2>

      <div className="flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

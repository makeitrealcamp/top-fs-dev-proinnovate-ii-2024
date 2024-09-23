import { useContext } from 'react';
import {
  ITaskContext,
  TasksContext,
} from '../../context/taskContext/tasksContext';
import { TaskCard } from './TaskCard';
import { Task } from './Tasks.types';

export const TaskList = ({
  //   tasks,
  markAsCompleted,
}: {
  tasks?: Task[];
}) => {
  const { tasks } = useContext<ITaskContext>(TasksContext);
  console.log('tasks', tasks);
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

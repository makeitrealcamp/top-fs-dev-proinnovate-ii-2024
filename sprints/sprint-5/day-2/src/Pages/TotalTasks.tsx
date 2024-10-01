import { useContext } from 'react';
import {
  ITaskContext,
  TasksContext,
} from '../context/taskContext/tasksContext';

export const TotalTasks = () => {
  const { totalTasks, completedTasks } = useContext<ITaskContext>(TasksContext);

  return (
    <div>
      TotalTasks
      <span>{totalTasks}</span>
      <p>Completed tasks {completedTasks}</p>
    </div>
  );
};

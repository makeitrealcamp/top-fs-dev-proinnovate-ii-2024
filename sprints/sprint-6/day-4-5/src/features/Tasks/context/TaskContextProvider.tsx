import { useTasks } from '../hooks/useTasks';
import { Task } from '../task.types';
import { TaskContext } from './TaskContext';

export const TaskContextProvider: React.FC<{
  initialTasks: Task[] | [];
  children: React.ReactNode;
}> = ({ initialTasks, children }) => {
  const { state, createTask, editTask, deleteTask, toggleTask } =
    useTasks(initialTasks);

  return (
    <TaskContext.Provider
      value={{
        tasks: state,
        createTask,
        editTask,
        deleteTask,
        toggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

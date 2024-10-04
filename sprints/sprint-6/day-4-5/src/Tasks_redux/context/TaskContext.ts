import { createContext } from 'react';
import { TaskContextType } from '../task.types';

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  createTask: () => {},
  deleteTask: () => {},
  toggleTask: () => {},
  editTask: () => {},
});

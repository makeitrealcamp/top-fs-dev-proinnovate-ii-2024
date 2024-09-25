import { createContext } from 'react';
import { Task } from '../../components/Tasks/Tasks.types';

export interface ITaskContext {
  totalTasks: number;
  completedTasks: number;
  tasks: Task[];
  createTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  changeStatus?: (id: number, status: Task['status']) => void;
}

const initialState: ITaskContext = {
  totalTasks: 0,
  completedTasks: 0,
  tasks: [],
  createTask: () => {},
  deleteTask: () => {},
  changeStatus: () => {},
};

export const TasksContext = createContext<ITaskContext>(initialState);

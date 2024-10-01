import { Task } from './Tasks.types';

type TaskAction =
  | { type: 'ADD_TASK'; payload: { task: Task } }
  | { type: 'DELETE_TASK'; payload: { id: number } }
  | { type: 'EDIT_TASK'; payload: { id: number; task: Task } }
  | {
      type: 'CHANGE_STATUS';
      payload: { id: number; status: 'IN_PROGRESS' | 'COMPLETED' | 'PENDING' };
    };

export const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload.task];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.payload.id);
    case 'EDIT_TASK':
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            ...action.payload.task,
          };
        }
        return task;
      });
    case 'CHANGE_STATUS':
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            status: action.payload.status,
          };
        }
        return task;
      });
    default:
      return state;
  }
};

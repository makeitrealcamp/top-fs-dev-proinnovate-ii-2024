import { useReducer } from 'react';
import { taskReducer } from '../Reducers/TaskReducer';
import { Task } from '../task.types';

export const useTasks = (initialState: Task[]) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const createTask = (task: Task) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const deleteTask = (id: number) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const toggleTask = (id: number) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const editTask = (id: number, title: string) => {
    dispatch({ type: 'EDIT_TASK', payload: { id, title } });
  };

  return { state, createTask, deleteTask, toggleTask, editTask };
};

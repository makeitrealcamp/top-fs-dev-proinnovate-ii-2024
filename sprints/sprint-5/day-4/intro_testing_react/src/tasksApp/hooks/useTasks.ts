import { useReducer } from 'react';
import { tasksReducer } from './tasksReducer';
import { TaskAction, TaskState } from './tasks.types';

const initialState: TaskState = [];

export const useTasks = () => {
  const [state, dispatch] = useReducer<
    (state: TaskState, action: TaskAction) => TaskState
  >(tasksReducer, initialState);
  const addTask = (title: string) => {
    dispatch({
      type: 'ADD_TASK',
      payload: { id: Date.now(), title, completed: false },
    });
  };

  const deleteTask = (id: number) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const toggleTask = (id: number) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  return { state, addTask, deleteTask, toggleTask };
};

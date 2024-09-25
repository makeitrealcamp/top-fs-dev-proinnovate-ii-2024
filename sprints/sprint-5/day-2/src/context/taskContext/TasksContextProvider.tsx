import React, { useReducer } from 'react';
import { TasksContext } from './tasksContext';
import { taskReducer } from '../../components/Tasks/TaskReducer';
import { Task } from '../../components/Tasks/Tasks.types';

export const TasksContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(taskReducer, []);

  const contextValue = {
    tasks: state,
    totalTasks: state.length,
    completedTasks: state.filter((task) => task.status === 'COMPLETED').length,

    createTask: (task: Task) => {
      console.log({ taskInReducer: task });
      dispatch({ type: 'ADD_TASK', payload: { task } });
    },
    changeStatus: (id: number, status: Task['status']) => {
      dispatch({ type: 'CHANGE_STATUS', payload: { id, status } });
    },
    deleteTask: (id: number) => {
      dispatch({ type: 'DELETE_TASK', payload: { id } });
    },
  };

  return (
    <TasksContext.Provider value={contextValue}>
      {children}
    </TasksContext.Provider>
  );
};

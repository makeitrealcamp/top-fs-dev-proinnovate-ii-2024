import { useReducer, useState } from 'react';
import { TaskForm } from '../components/Tasks/TaskForm';
import { TaskList } from '../components/Tasks/TaskList';
import { taskReducer } from '../components/Tasks/TaskReducer';
import { Task } from '../components/Tasks/Tasks.types';

export const TasksPage = () => {
  const [state, dispatch] = useReducer(taskReducer, []);

  const createTask = (task: Task) => {
    dispatch({ type: 'ADD_TASK', payload: { task } });
  };

  const markAsCompleted = (id: number, status: Task['status']) => {
    dispatch({ type: 'CHANGE_STATUS', payload: { id, status } });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl text-center font-semibold text-gray-900 ">
        Tasks
      </h1>

      <TaskForm setTasks={createTask} />
      <TaskList tasks={state} markAsCompleted={markAsCompleted} />
    </div>
  );
};

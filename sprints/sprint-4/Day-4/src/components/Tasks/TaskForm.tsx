import { useContext } from 'react';

import { Task } from './Tasks.types';
import {
  ITaskContext,
  TasksContext,
} from '../../context/taskContext/tasksContext';

export const TaskForm = () => {
  const { createTask } = useContext<ITaskContext>(TasksContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const description = (e.currentTarget.elements[1] as HTMLInputElement).value;
    createTask({ id: Date.now(), title, description, status: 'PENDING' });
    // setTasks([
    //   ...tasks,
    //   { id: Date.now(), title, description, completed: false },
    // ]);
  };

  return (
    <form className="max-w-sm mx-auto " onSubmit={handleSubmit}>
      <div className="mb-5 ">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Task title
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your task description here..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

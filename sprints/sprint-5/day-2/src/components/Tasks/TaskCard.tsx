import { Link } from 'react-router-dom';
import { useDeleteTask } from '../../hooks/useTasks';
import { Task } from './Tasks.types';
import { useEffect } from 'react';

export const TaskCard = ({ task }: { task: Task }) => {
  const { id, title, description, status } = task || {};
  const { mutateAsync: deleteTaskMutation } = useDeleteTask();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {};

  const handleDelete = (id: number) => {
    console.log('delete task', id);
    deleteTaskMutation(id);
    // fetch(`http://localhost:8000/tasks/${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log('Task deleted');
    //     } else {
    //       console.log('Task not deleted');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  };

  useEffect(() => {}, [status]);

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
          {<span className=" text-red-400">{status}</span>}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <div className="flex justify-between gap-4">
        <select name="status" id="status" onChange={handleSelectChange}>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="COMPLETED">Completed</option>
          <option value="PENDING">Pending</option>
        </select>

        <Link
          to={`/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
        <button
          onClick={() => handleDelete(id)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Delete
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

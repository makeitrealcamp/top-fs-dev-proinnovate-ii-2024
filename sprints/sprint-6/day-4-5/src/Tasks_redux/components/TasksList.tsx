import React, { useEffect, useState } from 'react';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { FaEdit, FaTrashAlt, FaSave } from 'react-icons/fa';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { Task } from '../task.types';
// import { deleteTask, toggleTask } from '../slice/tasksSlice';
import { deleteTaskAsync, fetchTasksAsync, toggleTaskAsync } from '../slice/asyncReducers';

export const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const [editTask, setEditTask] = useState<Task | null>(null);
  const [editTitle, setEditTitle] = useState('');
  console.log({
    tasks,
  });

useEffect(() => {
  dispatch(fetchTasksAsync());
}, []);  

  return (
    <ul className="max-w-md mx-auto mt-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-2 border-b dark:border-gray-700"
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleTaskAsync(task.id))}
              className="mr-2 text-white"
            />
            {editTask?.id === task.id ? (
              <Input
                label=""
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full"
              />
            ) : (
              <span
                className={`${
                  task.completed ? 'line-through text-gray-500' : ''
                } dark:text-gray-200`}
              >
                {task.title}
              </span>
            )}
          </div>
          <div className="flex items-center">
            {editTask?.id === task.id ? (
              <Button
                size="small"
                //  onClick={() => saveTask(task.id, editTitle)}
              >
                <FaSave />
              </Button>
            ) : (
              <>
                <Button
                  size="small"
                  className="mr-2"
                  onClick={() => setEditTask(task)}
                >
                  <FaEdit />
                </Button>
                <Button
                  size="small"
                  intent="tertiary"
                  onClick={() => dispatch(deleteTaskAsync(task.id))}
                >
                  <FaTrashAlt />
                </Button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

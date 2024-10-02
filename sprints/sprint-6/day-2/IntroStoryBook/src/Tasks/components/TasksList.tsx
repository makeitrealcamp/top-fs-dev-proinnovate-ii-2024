import React, { useContext, useState } from 'react';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { FaEdit, FaTrashAlt, FaSave } from 'react-icons/fa';
import { TaskContext } from '../context/TaskContext';

import type { Task } from '../task.types';

export const TaskList: React.FC = () => {
  const {
    tasks,
    toggleTask,
    editTask: saveTask,
    deleteTask,
  } = useContext(TaskContext);

  const [editTask, setEditTask] = useState<Task | null>(null);
  const [editTitle, setEditTitle] = useState('');

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
              onChange={() => toggleTask(task.id)}
              className="mr-2"
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
              <Button size="small" onClick={() => saveTask(task.id, editTitle)}>
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
                  onClick={() => deleteTask(task.id)}
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

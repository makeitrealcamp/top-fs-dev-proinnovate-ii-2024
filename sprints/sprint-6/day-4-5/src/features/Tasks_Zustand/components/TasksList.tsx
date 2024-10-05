import React, { useEffect, useState } from 'react';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { FaEdit, FaTrashAlt, FaSave } from 'react-icons/fa';

import { Task } from '../task.types';
import { useTasksStore } from '../store/TasksStore';

export const TaskList: React.FC = () => {
  const tasks = useTasksStore((state) => state.tasks);
  const toggleTask = useTasksStore((state) => state.toggleTaskAsync);
  const deleteTask = useTasksStore((state) => state.deleteTask);
  const getTasksAsync = useTasksStore((state) => state.getTasksAsync);

  const [editTask, setEditTask] = useState<Task | null>(null);
  const [editTitle, setEditTitle] = useState('');

  useEffect(() => {
    getTasksAsync();
  }, []);

  if (!tasks || !tasks?.length) return <p>No tasks</p>;
  return (
    <ul className="max-w-md mx-auto mt-4">
      {tasks?.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-2 border-b dark:border-gray-700"
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
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

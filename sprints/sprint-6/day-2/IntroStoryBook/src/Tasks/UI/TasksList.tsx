import React from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { FaEdit, FaTrashAlt, FaSave } from 'react-icons/fa';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([
    { id: 1, title: 'Sample Task', completed: false },
  ]);
  const [editTaskId, setEditTaskId] = React.useState<number | null>(null);
  const [editTitle, setEditTitle] = React.useState('');

  const handleToggle = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEdit = (task: Task) => {
    setEditTaskId(task.id);
    setEditTitle(task.title);
  };

  const handleSave = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: editTitle } : task
      )
    );
    setEditTaskId(null);
    setEditTitle('');
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

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
              onChange={() => handleToggle(task.id)}
              className="mr-2"
            />
            {editTaskId === task.id ? (
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
            {editTaskId === task.id ? (
              <Button size="small" onClick={() => handleSave(task.id)}>
                <FaSave />
              </Button>
            ) : (
              <>
                <Button
                  size="small"
                  className="mr-2"
                  onClick={() => handleEdit(task)}
                >
                  <FaEdit />
                </Button>
                <Button
                  size="small"
                  intent="tertiary"
                  onClick={() => handleDelete(task.id)}
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

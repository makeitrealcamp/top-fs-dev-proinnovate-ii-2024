import React from 'react';

import { v4 as uuid } from 'uuid';
import { Input } from '../UI/Input';
import { Button } from '../UI/Button';
import { useTasksStore } from '../store/TasksStore';
// import { createTask } from '../slice/tasksSlice';

export const TaskForm: React.FC = () => {
  const createTasks = useTasksStore((state) => state.createAsyncTask);

  const [task, setTask] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() === '') {
      setError('Task cannot be empty');
      return;
    }
    createTasks({
      id: uuid(),
      title: task,
      description: '',
      completed: false,
    });

    setTask('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <Input
        label="New Task"
        placeholder="Enter your task"
        className="text-white"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        error={error}
      />
      <Button type="submit" intent="primary">
        Add Task
      </Button>
    </form>
  );
};

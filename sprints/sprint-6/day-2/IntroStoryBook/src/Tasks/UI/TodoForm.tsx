import React from 'react';
import { Input } from './Input';
import { Button } from './Button';

export const TodoForm: React.FC = () => {
  const [task, setTask] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() === '') {
      setError('Task cannot be empty');
      return;
    }
    // Handle adding the task
    console.log('Task Added:', task);
    setTask('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <Input
        label="New Task"
        placeholder="Enter your task"
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

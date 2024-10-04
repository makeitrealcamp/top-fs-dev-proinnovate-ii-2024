import React, { useContext } from 'react';
import { Input } from '../UI/Input';
import { Button } from '../UI/Button';
import { TaskContext } from '../context/TaskContext';

export const TaskForm: React.FC = () => {
  const { createTask } = useContext(TaskContext);
  const [task, setTask] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() === '') {
      setError('Task cannot be empty');
      return;
    }
    createTask({
      id: Date.now(),
      title: task,
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

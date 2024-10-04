import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { Input } from '../UI/Input';
import { Button } from '../UI/Button';
// import { createTask } from '../slice/tasksSlice';
import { createTaskAsync } from '../slice/asyncReducers';
import { AppDispatch } from '../store/store';
export const TaskForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [task, setTask] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() === '') {
      setError('Task cannot be empty');
      return;
    }
    dispatch(
      createTaskAsync({
        id: uuid(),
        title: task,
        description: '',
        completed: false,
      })
    );

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

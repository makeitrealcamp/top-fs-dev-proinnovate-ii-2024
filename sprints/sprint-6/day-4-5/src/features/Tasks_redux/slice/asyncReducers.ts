import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../Api/api';
import { Task } from '../task.types';

export const fetchTasksAsync = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    const { data } = await api.get('/tasks');
    return data;
  }
);

export const createTaskAsync = createAsyncThunk<Task, Task>(
  'tasks/createTask',
  async (task) => {
    const { data } = await api.post('/tasks', task);
    return data;
  }
);

export const deleteTaskAsync = createAsyncThunk(
  'tasks/deleteTask',
  async (id: string) => {
    await api.delete(`/tasks/${id}`);
    return id;
  }
);

export const toggleTaskAsync = createAsyncThunk(
  'tasks/toggleTask',
  async (id: string) => {
    const { data } = await api.patch(`/tasks/${id}`);
    return data;
  }
);

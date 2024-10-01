import { tasksAPI } from './api';

type TaskStatus = 'not started' | 'in-progress' | 'done';
export type Task = {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
  userId: number;
};

export const getTasks = () => tasksAPI.get('/tasks');
export const getTask = (id: number) => tasksAPI.get(`/tasks/${id}`);
export const createTask = (task: Task) => tasksAPI.post('/tasks', task);
export const updateTask = (task: Task) => tasksAPI.put(`/tasks/${task.id}`, task);
export const deleteTask = (id: number) => tasksAPI.delete(`/tasks/${id}`);

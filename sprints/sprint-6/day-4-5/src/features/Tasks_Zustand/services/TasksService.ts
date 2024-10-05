import { api } from '../../../Api/api';
import { Task } from '../task.types';

export const getTasks = async () => {
  const { data } = await api.get('/tasks');
  return data;
};

export const createTask = async (task: Task) => {
  const { data } = await api.post('/tasks', task);
  return data;
};

export const deleteTask = async (id: string) => {
  const { data } = await api.delete(`/tasks/${id}`);
  return data;
};

export const toggleTask = async (id: string, task:Task) => {
  const { data } = await api.patch(`/tasks/${id}`, task);
  return data;
};



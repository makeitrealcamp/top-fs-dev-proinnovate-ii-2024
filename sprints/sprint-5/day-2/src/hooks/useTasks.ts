import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import * as taskService from '../services/tasksService';

export const useTasks = () => {
  return useQuery({
    queryFn: () => taskService.getTasks(),
    queryKey: ['tasks'],
  });
};
export const useTask = (id: number) => {
  return useQuery({
    queryFn: () => taskService.getTask(id), // fetch function
    queryKey: ['task', id],
    staleTime: 1000 * 60 * 5,
  });
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (task: taskService.Task) => taskService.createTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => taskService.deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (task: taskService.Task) => taskService.updateTask(task), // fetch function POST / PUT / DELETE
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });
};

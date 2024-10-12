import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Task, TaskStateType } from '../task.types';
import tasksService from '../services';

export const useTasksStore = create<TaskStateType>()(
  devtools((set, get) => ({
    tasks: [],
    errors: [],
    count: 0,
    createTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    deleteTask: (taskId: string) =>
      set((state) => ({ tasks: state.tasks.filter((t) => t.id !== taskId) })),
    toggleTask: (taskId: string) =>
      set((state) => ({
        tasks: state.tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        }),
      })),
    createAsyncTask: async (task: Task) => {
      try {
        const newTask = await tasksService.createTask(task);
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      } catch (error) {
        set((state) => ({ errors: [...state.errors, error] }));
      }
    },
    getTasksAsync: async () => {
      const tasks = await tasksService.getTasks();
      set({ tasks });
    },
    toggleTaskAsync: async (taskId: string) => {
      try {
        const newTask = get().tasks.find((t) => t.id === taskId);

        if (!newTask) {
          throw new Error('Task not found');
        }
        await tasksService.toggleTask(taskId, {
          ...newTask,
          completed: !newTask.completed,
        });

        set({
          tasks: get().tasks.map((t) => {
            if (t.id === taskId) {
              return { ...t, completed: !t.completed };
            }
            return t;
          }),
        });
      } catch (error) {
        set((state) => ({ errors: [...state.errors, error] }));
      }
    },
  }))
);

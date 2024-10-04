import { createSlice } from '@reduxjs/toolkit';
import {
  createTaskAsync,
  deleteTaskAsync,
  fetchTasksAsync,
  toggleTaskAsync,
} from './asyncReducers';

interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TasksState {
  tasks: Task[];
  error?: string;
}

const initialState: TasksState = {
  tasks: [],
};
export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksAsync.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(fetchTasksAsync.rejected, (state, action) => {
        console.log(action.error.message);
        state.error = action.error.message;
      })
      .addCase(createTaskAsync.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTaskAsync.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      })
      .addCase(toggleTaskAsync.fulfilled, (state, action) => {
        const task = state.tasks.find((task) => task.id === action.payload);
        if (task) {
          task.completed = !task.completed;
        }
      });
  },
});

export const {
  createTask,
  deleteTask,
  toggleTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;

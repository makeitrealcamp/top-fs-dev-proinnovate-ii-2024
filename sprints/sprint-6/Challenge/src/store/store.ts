import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/Tasks_redux/slice/tasksSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

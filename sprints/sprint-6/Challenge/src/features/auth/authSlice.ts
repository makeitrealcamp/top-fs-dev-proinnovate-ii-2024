import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { NewUser } from './userTypes';
import * as authService from './services/authService';

type User = {
  id: string;
  name: string;
  email: string;
};

interface AuthState {
  user: User | undefined;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isError: boolean;
}

const initialState: AuthState = {
  user: undefined,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  isError: false,
};

export const register = createAsyncThunk(
  'auth/register',
  async (newUser: NewUser) => {
    try {
      return await authService.register(newUser);
    } catch (error) {
      console.error(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (user: Omit<NewUser, 'confirmPassword'>) => {
    try {
      return await authService.login(user);
    } catch (error) {
      console.error(error);
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = undefined;
      state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isError = true;
      });
  },
});

export default authSlice.reducer;

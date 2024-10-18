import { api } from '../../../api/client';
import { UserSchema } from '../domain/types';

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post('/login', {
      email,
      password,
    });
    // return UserSchema.parse(response.data);
    return response.data;
  } catch (error: unknown) {
    throw new Error(error.response.data.message);
  }
};

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data } = await api.post('/signup', {
      email,
      password,
    });
    console.log({ data });
    // return UserSchema.parse(data);
    return data;
  } catch (error: unknown) {
    throw new Error(error.response.data.message);
  }
};

export const logout = async () => {
  try {
    // await api.post('/auth/logout');
    await fetch('http://localhost:3000/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
  } catch (error: unknown) {
    throw new Error(error.response.data.message);
  }
};

export const loginWithDiscord = async () => {
  try {
    const response = await api.get('/auth/discord');
    console.log({
      response,
    });
    return response.data;
  } catch (error: unknown) {
    console.log(error);
    throw new Error(error.response.data.message);
  }
};

export const getMe = async () => {
  try {
    const response = await api.get('/auth/me');
    return response.data;
  } catch (error: unknown) {
    throw new Error(error.response.data.message);
  }
};

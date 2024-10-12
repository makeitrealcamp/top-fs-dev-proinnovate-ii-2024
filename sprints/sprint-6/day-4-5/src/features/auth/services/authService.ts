import { api } from '../../../Api/api';
import { User, NewUser } from '../userTypes';

const register = async (newUser: NewUser): Promise<User> => {
  const { data } = await api.post('/auth/register', newUser);
  return data;
};

const login = async (user: Omit<NewUser, 'confirmPassword'>): Promise<User> => {
  //   const { data } = await api.post('/auth/login', user);
  console.log({ user });
  const { data } = await api.get('/users');
  console.log({ data });

  if (data.length === 0) {
    throw new Error('User not found');
  }
  if (data[0]){
    localStorage.setItem('jwt', JSON.stringify(data[0]?.token));
  }
  return data[0];
};

export { register, login };

import { useEffect, useState } from 'react';

export type User = {
  id: string;
  username: string;
  email: string;
};

export const useUserLogin = () => {
  const [user, setUser] = useState<User | undefined>();

  const login = async () => {
    setTimeout(() => {
      setUser({
        id: '1',
        username: 'John Doe',
        email: 'fake@email.com',
      } as User);
    }, 3000);
  };

  const logOut = () => {
    setUser(undefined);
  };
  console.log({ user });
  return {
    user,
    logOut,
    login,
  };
};

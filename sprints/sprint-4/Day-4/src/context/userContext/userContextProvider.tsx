import { createContext, ReactNode, useState } from 'react';

export type User = {
  id: string;
  username: string;
  email: string;
};

export interface UserContextType {
  user: User | undefined;
  login: () => void;
  logOut: () => void;
}

const initialState: UserContextType = {
  user: undefined,
  login: () => null,
  logOut: () => null,
};

export const UserContext = createContext<UserContextType>(initialState);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
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
  const state = {
    user,
    logOut,
    login,
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

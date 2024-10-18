import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { User } from '../domain/types';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);

  useEffect(() => {

    if (cookies.user && !user) {
      console.clear();
      console.log({
        user: cookies.user,
      });
      setUser(cookies.user);
      removeCookie('user');
      navigate('/tasks');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

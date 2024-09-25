import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserLogin } from '../hooks/useUserLogin';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useUserLogin();
  return user?.id ? children : <Navigate to="/" replace />;
};

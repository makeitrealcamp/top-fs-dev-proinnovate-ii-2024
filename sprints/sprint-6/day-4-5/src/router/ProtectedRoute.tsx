import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux/hooks';


export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector((state) => state.auth.user); 
  const savedToken = localStorage.getItem('jwt');
  return user?.id || savedToken ? children : <Navigate to="/login" replace />;
};

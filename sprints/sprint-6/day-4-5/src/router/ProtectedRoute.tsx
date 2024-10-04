import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';


export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = { id: null };
  return user?.id ? children : <Navigate to="/login" replace />;
};

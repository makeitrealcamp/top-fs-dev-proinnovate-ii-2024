import { Navigate } from 'react-router-dom';
import { useAuth } from '../modules/auth/application/AuthContext';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  console.log({ user });
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;

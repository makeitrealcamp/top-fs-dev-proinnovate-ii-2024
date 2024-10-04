import { Navigate, Outlet } from 'react-router-dom';


export const ProtectedRouteV2 = () => {
  const user = false;

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet context={{ user }} />;
};

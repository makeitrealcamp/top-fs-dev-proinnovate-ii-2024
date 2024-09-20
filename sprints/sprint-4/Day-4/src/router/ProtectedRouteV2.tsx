import { Navigate, Outlet } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from '../context/userContext/userContextProvider';

export const ProtectedRouteV2 = () => {
  const { user } = useContext(UserContext);

  console.log({ user });

  if (!user?.id) {
    return <Navigate to="/" replace />;
  }
  return <Outlet context={{ user }} />;
};

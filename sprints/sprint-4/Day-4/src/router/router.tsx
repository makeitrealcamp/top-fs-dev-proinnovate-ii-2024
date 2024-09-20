import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const MainLayout = lazy(() => import('../Layouts/MainLayout') );
const Home = lazy(() => import('../components/Home/Home'));
const TasksPage = lazy(() => import('../Pages/TasksPage'));
const PostsPage = lazy(() => import('../Pages/PostsPage'));
const PostPage = lazy(() => import('../Pages/PostPage'));
const ProtectedRoute = lazy(() => import('./ProtectedRoute'));
const ProtectedRouteV2 = lazy(() => import('./ProtectedRouteV2'));
const Login = lazy(() => import('../components/User/Login'));
const UserContextProvider = lazy(
  () => import('../context/userContext/userContextProvider')
);

const routes = {
  path: '/',
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <MainLayout />
    </Suspense>
  ),
  children: [
    {
      path: '/',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: '/login',
      element: (
        <UserContextProvider>
          <Login />
        </UserContextProvider>
      ),
    },
    {
      path: '/tasks',
      element: (
        <ProtectedRoute>
          <TasksPage />
        </ProtectedRoute>
      ),
    },
    {
      path: '/posts',
      element: (
        <UserContextProvider>
          <ProtectedRouteV2 />
        </UserContextProvider>
      ),
      children: [
        {
          path: '/posts',
          element: <PostsPage />,
        },
        {
          path: '/posts/:id',
          element: <PostPage />,
        },
      ],
    },
  ],
};
console.log({ routes, MainLayout, Home });
export const router = createBrowserRouter([routes]);

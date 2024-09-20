import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { UserContextProvider } from '../context/userContext/userContextProvider';
import { Login } from '../components/User/Login';
import { ProtectedRoute } from './ProtectedRoute';
import { TasksPage } from '../Pages/TasksPage';
import { ProtectedRouteV2 } from './ProtectedRouteV2';
import { ErrorPage } from '../Pages/ErrorPage';
import { PostPage, PostsPage } from '../Pages';
import { ToDos } from '../components/Todos/Todos';

const MainLayout = lazy(() => import('../Layouts/MainLayout'));
const Home = lazy(() => import('../components/Home/Home'));

// const PostsPage = lazy(() => import('../Pages/PostsPage'));
// const PostPage = lazy(() => import('../Pages/PostPage'));

const routes = {
  path: '/',
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <MainLayout />
    </Suspense>
  ),
  errorElement: <ErrorPage />,
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
      path: '/todos',
      element: <ToDos />,
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

export const router = createBrowserRouter([routes]);

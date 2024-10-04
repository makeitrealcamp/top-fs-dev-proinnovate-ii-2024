import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ProtectedRoute } from './ProtectedRoute';


import { ErrorPage } from '../Pages/ErrorPage';
import { LoginPage } from '../Pages/LoginPage';
import Home from '../shared/components/Home/Home';
import { TasksPage } from '../features/Tasks_redux/pages/TasksPage';
import { RegisterPage } from '../Pages/Registerpage';
import { Products } from '../features/Products/Products';


const MainLayout = lazy(() => import('../Layouts/MainLayout'));

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
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '/products',
      element: <Products />,
    },
    {
      path: '/tasks',
      element: (
        <ProtectedRoute>
          <TasksPage />,
        </ProtectedRoute>
      ),
    },
  ],
};

export const router = createBrowserRouter([routes]);

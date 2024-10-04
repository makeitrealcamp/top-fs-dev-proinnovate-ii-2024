import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';


import { ProtectedRoute } from './ProtectedRoute';

import { ProtectedRouteV2 } from './ProtectedRouteV2';
import { ErrorPage } from '../Pages/ErrorPage';
import { LoginPage } from '../Pages/LoginPage';
import Home from '../shared/components/Home/Home';
import { TasksPage } from '../Tasks_redux/pages/TasksPage';

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
      element: (

          <LoginPage />

      ),
    },
    {
      path: '/tasks',
      element: 
      <ProtectedRoute>
      <TasksPage />,
      </ProtectedRoute>
    },
  ],
};

export const router = createBrowserRouter([routes]);

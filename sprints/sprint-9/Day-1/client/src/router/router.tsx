import App from '../App';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Home, SignIn, SignUp } from '../page';
import { TasksPage } from '../page/TasksPage';
import PrivateRoute from './PrivateRoute';
import { ErrorPage } from '../page/ErrorPage';
import ProductPage from '../components/ProducPage';
import { SuccessPage } from '../page/SuccesPage';
import { ErrorPaymentPage } from '../page/ErrorPaymenPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/login',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/auth/discord/callback',
        element: <SignUp />,
      },
      {
        path: '/checkout',
        element: <ProductPage />,
      },
      {
        path: '/success',
        element: <SuccessPage />,
      },
      {
        path: '/error',
        element: <ErrorPaymentPage />,
      },
      {
        path: '/tasks',
        element: (
          <PrivateRoute>
            <TasksPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

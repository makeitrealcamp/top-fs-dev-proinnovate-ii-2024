import App from '../App';
import { createBrowserRouter,  } from 'react-router-dom';
import { Home, SignIn, SignUp } from '../page';
import { ErrorPage } from '../page/ErrorPage';
import Login from '../components/Login';


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
    ],
  },
]);

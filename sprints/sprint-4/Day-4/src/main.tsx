import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    // <React.StrictMode>
      <RouterProvider router={router} />
    // </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}

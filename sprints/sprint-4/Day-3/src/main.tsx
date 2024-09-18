import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ErrorPage } from './Pages/ErrorPage';
import { PostsPage } from './Pages/PostsPage';
import { MainLayout } from './Layouts/MainLayout';
import { PostPage } from './Pages/PostPage';
import { Home } from './components/Home/Home';
import { Comments, allCommentsLoader } from './components/Comments/Comments';
import { commentLoader, SingleComment } from './components/Comments/Comment';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <MainLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/posts',
//         element: <PostsPage />,
//       },
//       {
//         path: '/posts/:id',
//         element: <PostPage />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<PostsPage />}></Route>
      <Route path="/posts/:id" element={<PostPage />} />
      <Route
        path="/comments"
        loader={allCommentsLoader}
        element={<Comments />}
      />
      <Route path="/comments/:postId" 
      loader={commentLoader}
      
      element={<SingleComment />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { MainLayout } from '../Layouts/MainLayout';
import { Home } from '../components/Home/Home';
import { TasksPage } from '../Pages/TasksPage';
import { PostsPage } from '../Pages/PostsPage';
import { ProtectedRoute } from './ProtectedRoute';
import { ProtectedRouteV2 } from './ProtectedRouteV2';
import { Login } from '../components/User/Login';
import { UserContextProvider } from '../context/userContext/userContextProvider';
import { PostPage } from '../Pages/PostPage';

const routes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />,
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

export const router = createBrowserRouter([routes]);

const routerv2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <UserContextProvider>
            <Login />
          </UserContextProvider>
        }
      />
      <Route path="/Tasks" element={<TasksPage />} />
      <Route
        path="/posts"
        element={
          <UserContextProvider>
            <ProtectedRouteV2 />
          </UserContextProvider>
        }
      >
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Route>
    </Route>
  )
);

//   export const router = createBrowserRouter(
//    createRoutesFromElements(
//      <Route path="/" element={<MainLayout />}>
//        <Route path="/" element={<Home />} />
//        <Route path="/Tasks" element={<TasksPage />} />
//        <Route path="/posts" element={<PostsPage />}></Route>
//        <Route path="/posts/:id" element={<PostPage />} />
//        <Route
//          path="/comments"
//          loader={allCommentsLoader}
//          element={<Comments />}
//        />
//        <Route path="/comments/:postId"
//        loader={commentLoader}

//        element={<SingleComment />} />
//        <Route path="*" element={<ErrorPage />} />
//      </Route>
//    )
//  );

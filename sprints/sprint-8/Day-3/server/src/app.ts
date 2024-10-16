import express from 'express';
import cookie from 'cookie-parser';

import userRouter from './contexts/users/routes';
import projectsRouter from './contexts/projects/routes';
import uploadRoutes from './contexts/fileUpload/routes';

import { errorHandler } from './shared/errors/errorHandler';
import { AuthenticationError } from './shared/errors/AuthenticationError';

const app = express();

app.use(express.json());
app.use(cookie());

app.use(userRouter);
app.use(projectsRouter);
app.use(uploadRoutes);

app.get('/error', (req, res, next) => {
  const error = new AuthenticationError(
    'You are not authorized to access this resource',
  );
  next(error);
});

app.use('*', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.use(errorHandler);

export default app;

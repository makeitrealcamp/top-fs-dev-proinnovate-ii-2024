import express from 'express';

import userRouter from './users/routes';
import projectsRouter from './projects/routes';

import { errorHandler } from './shared/errors/errorHandler';
import { AuthenticationError } from './shared/errors/AuthenticationError';

const app = express();

app.use(express.json());

app.use('/api', userRouter);
app.use(projectsRouter);

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

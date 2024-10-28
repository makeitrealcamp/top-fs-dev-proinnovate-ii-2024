import express from 'express';
import cookie from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import { createHandler } from 'graphql-http/lib/use/express';
import { ruruHTML } from 'ruru/server';

import passport from 'passport';

import { schema } from './graphql';

import userRouter from './contexts/users/routes';
import projectsRouter from './contexts/projects/routes';
import uploadRoutes from './contexts/fileUpload/routes';
import oAuthRoutes from './contexts/auth/routes';
import transactionRouter from './trasactions/router';

import { errorHandler } from './shared/errors/errorHandler';
import { AuthenticationError } from './shared/errors/AuthenticationError';

const app = express();

app.use(express.json());
app.use(cookie());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(
  session({
    secret: 'your_session_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: false },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(userRouter);
app.use(projectsRouter);
app.use(uploadRoutes);
app.use(oAuthRoutes);
app.use(transactionRouter)

app.use(
  '/graphql',
  createHandler({
    schema,
  }),
);

app.get('/graphiql', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  return res.end(
    ruruHTML({
      endpoint: '/graphql',
    }),
  );
});

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

import express from 'express';

import userRouter from './users/routes';

const app = express();

app.use(express.json());

app.use('/api',userRouter);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
  },
);

export default app;

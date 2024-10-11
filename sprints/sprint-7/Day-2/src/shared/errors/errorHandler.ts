import { NextFunction, Request, Response } from 'express';
import { BaseError } from './BaseError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err.name);
  if (err instanceof BaseError) {
    console.error({
      message: err.message,
      status: err.status,
      name: err.name,
      errorType: err.errorType,
    });
    return res.status(err.status).json({ error: err.message });
  }
if (err.name === 'PrismaClientInitializationError') {
    console.error({
      message: err.message,
      status: 400,
    });
    res.status(500).json({ error: 'Something went wrong' });
}

  res.status(500).json({ error: err.message });
};

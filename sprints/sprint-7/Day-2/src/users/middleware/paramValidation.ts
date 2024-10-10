import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

const uuidSchema = z.string().uuid();

export const paramValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  if (!uuidSchema.safeParse(id).success) {
    next(new Error('Invalid ID'));
  }
  next();
};

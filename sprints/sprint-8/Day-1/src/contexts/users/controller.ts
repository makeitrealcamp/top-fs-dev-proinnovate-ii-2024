import { NextFunction, Request, Response } from 'express';

import { userService } from './services';
import { ApplicationError } from '../../shared/errors/ApplicationError';
import { errorStatus, errorType } from '../../utils/constants';

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await userService.getUserById(id);

    if (!user) {
       res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    throw new Error(`Unable to fetch user: ${error}`);
  }
};

const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
     throw new ApplicationError('Name and email are required', errorType.BAD_REQUEST, errorStatus.BAD_REQUEST);
  }

  try {
    const user = await userService.createUser({ name, email });

    res.status(201).json(user);
  } catch (error: unknown) {
    throw new Error(`Unable to create user: ${error}`);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await userService.deleteUser(id);
    res.json(user);
  } catch (error) {
    throw new Error(`Unable to delete user: ${error}`);
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age, bio } = req.body;

  try {
    const user = await userService.updateUser(id, { name, age, bio });

    res.json(user);
  } catch (error) {
    throw new Error(`Unable to update user: ${error}`);
  }
};

export { getAllUsers, createUser, getUserById, updateUser, deleteUser };

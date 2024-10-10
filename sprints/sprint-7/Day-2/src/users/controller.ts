import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/database';

import * as userService from './services';

// Single responsibility principle
// Clean architecture -> decoupling of concerns

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    throw new Error(`Unable to fetch user: ${error}`);
  }
};

const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    console.log(user);
    res.status(201).json(user);
  } catch (error: unknown) {
    throw new Error(`Unable to create user: ${error}`);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });

    res.json(user);
  } catch (error) {
    throw new Error(`Unable to delete user: ${error}`);
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age, bio } = req.body;

  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        age,
        bio,
      },
    });

    res.json(user);
  } catch (error) {
    throw new Error(`Unable to update user: ${error}`);
  }
};

export { getAllUsers, createUser, getUserById, updateUser, deleteUser };

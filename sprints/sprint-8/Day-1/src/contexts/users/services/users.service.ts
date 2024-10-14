import { User } from '../entity/user';
import { prisma } from '../../../database/database';

interface UserService {
  getUserById(id: string): Promise<User | null>;
  getUsers(): Promise<User[]>;
  createUser(user: Partial<User>): Promise<User>;
  updateUser(id: string, user: Partial<User>): Promise<User>;
  deleteUser(id: string): Promise<User>;
}

export const userService: UserService = {
  getUsers: async () => await prisma.user.findMany(),
  getUserById: async (id: string) =>
    await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    }),
  createUser: async (user: User) => await prisma.user.create({ data: user }),
  updateUser: async (id: string, user: User) =>
    await prisma.user.update({ where: { id }, data: user }),
  deleteUser: async (id: string) => await prisma.user.delete({ where: { id } }),
};

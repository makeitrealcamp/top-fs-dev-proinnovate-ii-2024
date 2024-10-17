import { UserRepository } from '../../entity/user.repository';
import { prisma } from '../../../../database/database';
import { UserInput } from '../../entity/user';

export const userPrismaRepository: UserRepository = {
  createUser: async (user: UserInput) => {
    console.log('Prisma create user');
    const newUser = await prisma.user.create({ data: user });
    console.log({ newUser });
    return newUser;
  },
  getUserByEmail: async (email: string) => {
    return await prisma.user.findUnique({ where: { email } });
  },
  getAllUsers: async () => {
    return await prisma.user.findMany();
  },
};

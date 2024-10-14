import { prisma } from "../../../database/database";


export const getAllUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw new Error(`Unable to fetch users: ${error}`);
  }
};

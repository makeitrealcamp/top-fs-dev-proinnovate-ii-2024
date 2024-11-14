import { revalidatePath } from 'next/cache';
import { prisma } from '../../database/database';

export const deleteUser = async (id: string) => {
  'use server';
  await prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });
  revalidatePath('/users');
};

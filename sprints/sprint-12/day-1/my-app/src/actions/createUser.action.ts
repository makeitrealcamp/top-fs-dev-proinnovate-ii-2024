import { revalidatePath } from "next/cache";
import { prisma } from "../../database/database";

export const createUser = async (formData: FormData) => {
    'use server';
    const email = formData.get('email');
    const name = formData.get('name');
    console.log({
      email,
      name,
    });
    try {
      await prisma.user.create({
        data: {
          email: email as string,
          name: name as string,
        },
      });

      revalidatePath('/users');
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        throw new Error('Failed to create user');
      }
    }
  };

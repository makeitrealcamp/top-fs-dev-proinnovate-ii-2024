import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.user.create({
    data: {
      email: 'alice@email.com',
      name: 'Alice',
      password: 'password',
    },
  });
  await prisma.user.upsert({
    where: { email: 'alice@email.com' },
    create: {
      Project: {
        create: {
          name: 'Alice Project',
          dueDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

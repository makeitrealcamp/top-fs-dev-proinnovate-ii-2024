import express from 'express';
import { prisma } from './database/database';


const app = express();

app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    throw new Error(`Unable to fetch users: ${error}`);
  }
});

app.post('/users', async (req, res) => {
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
  } catch (error) {
    throw new Error('Unable to create user');
  }
});

export default app;

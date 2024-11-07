import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CLIENT_URI || 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json());

app.use('/api/todos', todoRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('TODO App Backend up and running');
});

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/todo-app';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

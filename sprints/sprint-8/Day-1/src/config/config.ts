import { config } from 'dotenv';
config();

export const { PORT, NODE_ENV, DATABASE_URL, JWT_SECRET } = process.env;

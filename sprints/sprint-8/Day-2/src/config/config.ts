import { config } from 'dotenv';
config();

export const {
  PORT,
  NODE_ENV,
  DATABASE_URL,
  JWT_SECRET,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_FROM,
  FRONTEND_URL,
} = process.env;

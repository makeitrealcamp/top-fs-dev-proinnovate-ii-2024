import app from './app';
import http from 'http';
import dotenv from 'dotenv';
import { databaseConnect } from './database/database';

dotenv.config();

// // const PORT = 3000;
// databaseConnect().then(() => {
//   console.log('Connected to the database');
// });

const server = http.createServer(app);
console.log(`port ${process.env.PORT}`);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

import app from './app';
import http from 'http';
import { setupWebsocket } from './websocket';

const server = http.createServer(app);
console.log(`port ${process.env.PORT}`);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

const wsServer = http.createServer();


setupWebsocket(wsServer);

wsServer.listen(4000, () => {
  console.log(`Websocket server is running on http://localhost:4000`);
});
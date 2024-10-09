import express from 'express';

const app = express();
// middleware 
/**
 *  is a function that has access to the request object (req),
 *  the response object (res), and the next function in the application’s request-response cycle.
 */

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
};

app.use(logger);


app.get('/users/create', (request, response) => {
  console.log({ request });
  response.status(401);
  //   response.send('Hello World!');
  response.json({ message: 'Hello World!' });
});

app.post('/users/create', (req, res) => {
  res.status(201).json({ message: 'Created', body: req.body });
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3001, () => {
  console.log('Listening on 3001');
});

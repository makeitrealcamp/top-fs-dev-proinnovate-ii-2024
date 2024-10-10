import express from 'express';

const app = express();

app.use(express.json());
// middleware
/**
 *  is a function that has access to the request object (req),
 *  the response object (res), and the next function in the application’s request-response cycle.
 */

const logger = (req, res, next) => {
  console.log(`Logger->${req.method} ${req.url}`);
  next();
};
app.use(logger);

const validateBody = (req, res, next) => {
  console.log({body: req.body});
  if (!Object.keys(req.body).length) {
    res.status(400).json({ message: 'Bad Request' });
  } else {
    next();
  }
};

app.get('/users', logger, (request, response) => {
  // console.log({ request });
  response.status(401);
  //   response.send('Hello World!');
  response.json({ message: 'Hello World!' });
});

app.post('/users', validateBody, (req, res) => {
  res.status(201).json({ message: 'Created', body: req.body });
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(3001, () => {
  console.log('Listening on 3001');
});

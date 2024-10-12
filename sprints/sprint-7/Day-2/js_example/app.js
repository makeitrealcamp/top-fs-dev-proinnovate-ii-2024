import express from 'express';

const app = express();
// middleware
app.use(express.json());
const logger = (req, res, next) => {
  console.log(`Logger->${req.method} ${req.url}`);
  next();
};

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

app.get('/users', (request, response) => {
  response.status(200).json(users);
});

app.get('/users/:id', (request, response) => {
  const { id } = request.params;
  const user = users.find((u) => u.id === Number(id));
  if (user) {
    response.status(200).json(user);
  } else {
    response.status(404).json({ message: 'User not found' });
  }
});

const validateUser = (request, response, next) => {
  const { name } = request.body;
  if (!name) {
    next(new Error('Name is required'));
  }
  next();
};

app.post('/users', logger, validateUser, (request, response) => {
  const user = request.body;

  users.push({
    id: users.length + 1,
    name: user.name,
  });
  response.status(201).json(user);
});

app.put('/users/:id', validateUser, (request, response) => {
  const { id } = request.params;
  const { name } = request.body;
  const user = users.find((u) => u.id === Number(id));
  if (user) {
    user.name = name;
    response.status(200).json(user);
  } else {
    response.status(404).json({ message: 'User not found' });
  }
});

app.delete('/users/:id', (request, response) => {
  const { id } = request.params;
  const userIndex = users.findIndex((u) => u.id === Number(id));
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    response.status(200).json({ message: 'User deleted' });
  } else {
    response.status(404).json({ message: 'User not found' });
  }
});

app.get('/error', (req, res, next) => {
  const error = new Error('Error route');
  next(error);
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

app.listen(3001, () => {
  console.log('Listening on 3001');
});

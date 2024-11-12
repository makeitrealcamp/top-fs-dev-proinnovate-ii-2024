import express, { Request, Response } from 'express';
import Todo, { ITodo } from '../models/Todo';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// Create a new todo
router.post('/', async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    const newTodo = new Todo({ title });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.put('/:id', async (req: any, res: any) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.delete('/:id', async (req: any, res: any) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

export default router;

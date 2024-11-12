import React, { useState, useEffect } from 'react';
import { api } from '../api/api';

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const fetchTodos = async () => {
    try {
      const res = await api.get('/api/todos');
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTodo = async () => {
    if (!newTodo.trim()) return;
    try {
      const res = await api.post('/api/todos', { title: newTodo });
      setTodos([...todos, res.data]);
      setNewTodo('');
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComplete = async (id: string) => {
    const todo = todos?.find((t) => t._id === id);
    if (!todo) return;
    try {
      const res = await api.put(`/api/todos/${id}`, {
        completed: !todo.completed,
      });
      setTodos(todos?.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await api.delete(`/api/todos/${id}`);
      setTodos(todos.filter((t) => t._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="max-w mx-auto mt-10 p-4 shadow-lg rounded">
      <h1 className="text-2xl font-bold mb-4">TODO App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow p-2 border rounded-l"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-r"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <ul>
        {todos?.map((todo) => (
          <li key={todo._id} className="flex items-center justify-between mb-2">
            <span
              className={`flex-grow ${
                todo.completed ? 'line-through text-gray-500' : ''
              }`}
              onClick={() => toggleComplete(todo._id)}
            >
              {todo.title}
            </span>
            <button
              className="text-red-500"
              onClick={() => deleteTodo(todo._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

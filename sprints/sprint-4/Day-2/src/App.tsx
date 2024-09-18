import { useState } from 'react';

import './App.css';
import { CreateTaskForm } from './components/CreateTaskForm';
import { TaskCard } from './components/Task';
import { Task } from './components/Task.types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BasicExample } from './components/BasicExample';
import { Card } from './components/styledComponents/Card';
import { Button } from './components/sideEffects/Button';
import { Posts } from './components/sideEffects/Posts';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCreateTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEditTask = (id: number, editedTask: Task) => {
    const editedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...editedTask,
        };
      }
      return task;
    });

    setTasks(editedTasks);
  };

  console.log(import.meta.env.VITE_API_KEY);
  console.log(import.meta.env.DB_PASSWORD);

  return (
    <div>
      {/* <a href="/contacts">
      Contacts</a> */}
      <h2>My app </h2>

      <nav>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            listStyleType: 'none',
            padding: '1rem',
            gap: '1rem',
          }}
        >
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to={'/posts'}> Go to posts </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/posts"> Posts </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      {/* <h2 className="text-3xl font-bold underline text-red-500 p-9 lg:text-gray-600 ">
        {' '}
        Task app{' '}
      </h2>
      <CreateTaskForm onCreateTask={handleCreateTask} />
      {tasks.map((task) => (
        <TaskCard
          task={task}
          key={task.id}
          handleDelete={handleDeleteTask}
          handleEdit={handleEditTask}
        />
      ))}
      <BasicExample />
      <Card />
      <Button /> */}
    </div>
  );
}

export default App;

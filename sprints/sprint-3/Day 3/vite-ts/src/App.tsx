import { useState } from 'react';

import './App.css';
import { CreateTaskForm } from './components/CreateTaskForm';
import { TaskCard } from './components/Task';
import { Task } from './components/Task.types';

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

  return (
    <div>
      <CreateTaskForm onCreateTask={handleCreateTask} />
      {tasks.map((task) => (
        <TaskCard
          task={task}
          key={task.id}
          handleDelete={handleDeleteTask}
          handleEdit={handleEditTask}
        />
      ))}
    </div>
  );
}

export default App;

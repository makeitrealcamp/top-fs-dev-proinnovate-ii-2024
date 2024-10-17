
import { useReducer } from 'react';
import { Task } from '../types';
import { TaskReducer } from '../hooks/useToDo';
import { Title, Form, Tasks, Stats } from '../components';
import { useAuth } from '../modules/auth/application/AuthContext';
import { logout } from '../modules/auth/services/authService';

export const TasksPage = (): JSX.Element => {
  const { logout: authLogout } = useAuth();
  const [state, dispatch] = useReducer(TaskReducer, []);
  const amount = state.length;
  const completed = state.filter((item) => item.status === 'Done').length;

  const createTask = (todo: Task) => {
    dispatch({ type: 'ADD_TASK', payload: { task: todo } });
  };

  const deleteTask = (id: Task['id']) => {
    dispatch({ type: 'DELETE_TASK', payload: { id } });
  };

  const updateTask = (task: Task) => {
    dispatch({ type: 'UPDATE_TASK', payload: { task } });
  };

  const handleLogout = () => {
    logout();
    authLogout();
  };
  return (
    <div className="relative">
      <div className="absolute top-0 right-0 bg-gray-800 flex items-center justify-center p-2 rounded-xl hover:bg-gray-950 cursor-pointer">
        <button onClick={handleLogout} className="text-white text-[0.8rem]">
          Logout
        </button>
      </div>
      <Title />
      <Form setTask={createTask} />
      <Stats amount={amount} completed={completed} />
      <Tasks tasks={state} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
};

import { Provider } from 'react-redux';
import { store } from './store/store';
import { TasksPage } from './pages/TasksPage';

export const TasksApp = () => {
  return (
    <Provider store={store}>
      <TasksPage />
    </Provider>
  );
};

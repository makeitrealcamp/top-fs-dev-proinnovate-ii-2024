import './App.css';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './modules/auth/application/AuthContext';
import { MainLayout } from './Layout/MainLayout';

function App() {
  return (
    <>
      <AuthProvider>
        <MainLayout />
      </AuthProvider>
    </>
  );
}

export default App;

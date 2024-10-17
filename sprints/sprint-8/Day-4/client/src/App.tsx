import './App.css';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './modules/auth/application/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </>
  );
}

export default App;

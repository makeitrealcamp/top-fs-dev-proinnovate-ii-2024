import './App.css';
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

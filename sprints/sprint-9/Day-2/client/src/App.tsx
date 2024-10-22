import './App.css';
import { AuthProvider } from './modules/auth/application/AuthContext';
import Home from './page/Home';

function App() {
  return (
    <>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </>
  );
}

export default App;

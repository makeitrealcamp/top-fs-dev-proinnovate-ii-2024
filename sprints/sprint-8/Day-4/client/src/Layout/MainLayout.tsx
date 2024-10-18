import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { useNavigation } from 'react-router-dom';
import { useAuth } from '../modules/auth/application/AuthContext';

export function MainLayout() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      {navigation.state === 'loading' && <div>Loading...</div>}
      <Outlet />
      <Footer />
    </>
  );
}

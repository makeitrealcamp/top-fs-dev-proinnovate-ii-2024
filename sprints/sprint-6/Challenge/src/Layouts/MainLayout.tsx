import { Outlet } from 'react-router-dom';

import { useNavigation } from 'react-router-dom';
import { Header } from '../shared/components/Header/Header';

export default function MainLayout() {
  const navigation = useNavigation();

  return (
    <div className="w-full h-min-[200vh] h-max">
      <Header />

      {navigation.state === 'loading' && <div>Loading...</div>}
      <Outlet />

    </div>
  );
}

import { useAuth } from '@/src/context/AuthContext';
import { Redirect, Slot, Stack } from 'expo-router';


export default function AuthLayout() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Redirect href="/profile" />;
  }

  return <Slot />;
}
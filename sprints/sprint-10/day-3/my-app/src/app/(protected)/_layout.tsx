import { useAuth } from '@/src/context/AuthContext';
import { ProtectedRoute } from '@/src/shared/ProtectedRoute';
import { Redirect, Slot, Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <ProtectedRoute>
      <Slot />
    </ProtectedRoute>
  );
}

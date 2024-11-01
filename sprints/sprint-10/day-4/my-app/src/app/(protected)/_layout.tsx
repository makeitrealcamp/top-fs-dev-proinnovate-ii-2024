import { ProtectedRoute } from '@/src/shared/ProtectedRoute';
import { Slot } from 'expo-router';

export default function AuthLayout() {
  return (
    <ProtectedRoute>
      <Slot />
    </ProtectedRoute>
  );
}

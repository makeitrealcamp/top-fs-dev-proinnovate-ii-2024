import { useAuth } from '@/src/context/AuthContext';
import { Button, Text, View } from 'react-native';

export default function Dashboard() {
  const {logout}= useAuth();
  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

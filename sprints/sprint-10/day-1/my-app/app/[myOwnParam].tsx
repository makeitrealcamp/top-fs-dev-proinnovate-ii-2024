import { useLocalSearchParams } from 'expo-router';
import { Task } from '../screens/Task';

export default function Detail() {
  const { myOwnParam } = useLocalSearchParams();
  console.log({ myOwnParam });

  return <Task id={myOwnParam} title="Task 1" />;
}

import { Stack } from 'expo-router';

export default function ProductsStack() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{ title: 'Products', headerShown: false }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerTitle: 'Product Detail',
        }}
      />
    </Stack>
  );
}

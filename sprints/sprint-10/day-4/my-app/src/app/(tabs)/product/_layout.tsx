import { Stack, Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="product"
        options={{ headerShown: true, title: 'Products', presentation: 'modal', }}
      />
    </Stack>
  );
}

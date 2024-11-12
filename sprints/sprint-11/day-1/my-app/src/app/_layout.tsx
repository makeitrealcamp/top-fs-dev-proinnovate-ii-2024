import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../../global.css';

import { useColorScheme } from '@/src/hooks/useColorScheme';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <CartProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen
            name="(drawer)"
            options={{ headerShown: false, headerTitle: 'Home' }}
          />
          <Stack.Screen
            name="(protected)"
            options={{
              headerShown: true,
              headerTitle: 'My Profile',
              headerTitleStyle: { fontFamily: 'SpaceMono' },
              headerStyle: { backgroundColor: '#bababa' },
              headerTintColor: '#fff',
            }}
          />

          <Stack.Screen
            name="(auth)"
            options={{
              headerShown: true,
              headerTitle: '',
            }}
          />

          {/* 
        <Stack.Screen name="+not-found" />
        \*/}
        </Stack>
        </GestureHandlerRootView>
      </CartProvider>
    </AuthProvider>
  );
}

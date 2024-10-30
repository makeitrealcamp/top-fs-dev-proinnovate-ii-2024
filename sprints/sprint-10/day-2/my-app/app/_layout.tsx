import { Slot, Stack } from 'expo-router'
import { View } from 'react-native'
import '../global.css'
import { CartProvider } from '~/context/CartContext'
import { AuthProvider } from '~/context/AuthContext'

export default function Layout() {
  return (
    <AuthProvider>
      <CartProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitle: 'My App',
            headerShown: false,
          }}
        />
      </CartProvider>
    </AuthProvider>
  )
}

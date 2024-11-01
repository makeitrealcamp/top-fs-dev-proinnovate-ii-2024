import { Slot, Stack, Tabs } from 'expo-router'
import { View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { ProtectedRoute } from '~/shared/ProtectedRoute'

export default function TabsLayout() {
  return (
        <ProtectedRoute>
          <Stack/>
    {/* <Tabs>
        <Tabs.Screen
          name='index'
          // component={Slot}
          options={{
            title: 'Home',
            tabBarIcon: () => (
              <MaterialIcons name='home' size={24} color='black' />
            ),
          }}
          initialParams={{ name: 'home Tab' }}
        />
        <Tabs.Screen
          name='about'
          options={{ title: 'About' }}
          // component={Slot}
          initialParams={{ name: 'about' }}
        />
        <Tabs.Screen
          name='login'
          options={{ title: 'About' }}
          // component={Slot}
          initialParams={{ name: 'about' }}
        />
      </Tabs> */}
    </ProtectedRoute>
  )
}

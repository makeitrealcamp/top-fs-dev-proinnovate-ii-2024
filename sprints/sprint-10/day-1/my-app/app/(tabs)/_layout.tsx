import { Slot, Tabs } from 'expo-router';
import { View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        // component={Slot}
        options={{
          title: 'Home',
          tabBarIcon: () => (
            <MaterialIcons name="home" size={24} color="black" />
          ),
        }}
        initialParams={{ name: 'home Tab' }}
      />
      <Tabs.Screen
        name="about"
        options={{ title: 'About' }}
        // component={Slot}
        initialParams={{ name: 'about' }}
      />
    </Tabs>
  );
}

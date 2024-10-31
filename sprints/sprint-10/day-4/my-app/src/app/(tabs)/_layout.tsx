import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { CustomDrawer } from '@/src/components/CustomDrawer/CustomDrawer';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable } from 'react-native';

export default function Layout() {
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawer}>
        <Drawer.Screen
          name="index"
          options={{
            headerShown: true,
            title: 'Products',
            headerRight: () => (
              <Pressable
                onPress={() => alert('This is a button!')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <AntDesign
                  name="infocirlceo"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              </Pressable>
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

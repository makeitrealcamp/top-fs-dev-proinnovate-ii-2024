
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '@/src/context/AuthContext';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export const CustomDrawer = (props: any) => {
  const navigation = useNavigation();
  const router = useRouter();
  const { bottom } = useSafeAreaInsets();
  const { isLoggedIn, user, logout } = useAuth();


  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <DrawerContentScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={{ padding: 20 }}>
        {isLoggedIn && user ? (

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <Image
              source={{ uri: user.avatarUrl }}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                {user.name}
              </Text>
              <Text style={{ fontSize: 14, color: 'gray' }}>{user.email}</Text>
            </View>
          </View>
        ) : (

          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Welcome!</Text>
            <Text style={{ fontSize: 14, color: 'gray' }}>
              Please log in to access more features.
            </Text>
          </View>
        )}


        <View style={{ flex: 1 }}>
          {isLoggedIn ? (

            <>
              <DrawerItem
                label="Products"
                icon={({ color, size }) => (
                  <Ionicons name="pricetags-outline" size={size} color={color} />
                )}
                onPress={() => {
                  closeDrawer();
                  router.push('/');
                }}
              />
              <DrawerItem
                label="Dashboard"
                icon={({ color, size }) => (
                  <Ionicons name="speedometer-outline" size={size} color={color} />
                )}
                onPress={() => {
                  closeDrawer();
                  router.push('../../(protected)/dashboard');
                }}
              />
              <DrawerItem
                label="My Account"
                icon={({ color, size }) => (
                  <Ionicons name="person-outline" size={size} color={color} />
                )}
                onPress={() => {
                  closeDrawer();
                  router.push('../../(protected)/profile');
                }}
              />
            </>
          ) : (

            <>
              <DrawerItem
                label="Products"
                icon={({ color, size }) => (
                  <Ionicons name="pricetags-outline" size={size} color={color} />
                )}
                onPress={() => {
                  closeDrawer();
                  router.push('/(tabs)/');
                }}
              />
              <DrawerItem
                label="Login"
                icon={({ color, size }) => (
                  <Ionicons name="log-in-outline" size={size} color={color} />
                )}
                onPress={() => {
                  closeDrawer();
                  router.push({
                    pathname: '../../(auth)/login',
                    params: { demo: 'demo' },
                  });
                }}
              />
            </>
          )}
        </View>
      </View>

      {isLoggedIn ? (
        <Pressable
          onPress={() => {
            logout();
            closeDrawer();
            router.replace('/login');
          }}
          style={{
            padding: 20,
            borderTopWidth: 1,
            borderColor: '#ccc',
            paddingBottom: bottom + 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Ionicons name="log-out-outline" size={20} color="red" style={{ marginRight: 10 }} />
          <Text style={{ color: 'red', fontSize: 16 }}>Logout</Text>
        </Pressable>
      ) : null}
    </DrawerContentScrollView>
  );
};

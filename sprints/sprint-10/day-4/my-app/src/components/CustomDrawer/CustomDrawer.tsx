import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const CustomDrawer = (props: any) => {
  const navigation = useNavigation();
  const { bottom } = useSafeAreaInsets();

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <DrawerContentScrollView style={{ flex: 1 }}>
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          }}
          className="rounded-full"
          style={{ width: 40, height: 40 }}
        />
      </View>
      <View>
        <Text>Drawer content</Text>
      </View>
      <DrawerItemList {...props} />

      <Pressable
        onPress={closeDrawer}
        style={{
          padding: 20,
          borderWidth: 1,
          borderColor: 'black',
          paddingBottom: bottom + 10,
        }}
      >
        <View>
          <Text>Close</Text>
        </View>
      </Pressable>
    </DrawerContentScrollView>
  );
};

// app/[...missing].tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { usePathname } from 'expo-router';

const MissingPage = () => {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page Not Found</Text>
      <Text style={styles.message}>
        The path "<Text style={styles.path}>{pathname}</Text>" does not exist.
      </Text>
    </View>
  );
};

export default MissingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28, 
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18, 
    textAlign: 'center',
  },
  path: {
    fontWeight: 'bold',
    color: 'red',
  },
});

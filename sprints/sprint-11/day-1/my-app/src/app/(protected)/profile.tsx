
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useAuth } from '@/src/context/AuthContext';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';


export default function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {

    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.profilePictureContainer}>
        <Image source={{ uri: user.avatarUrl }} style={styles.profilePicture} />
      </View>


      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user.name}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>

      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {

          router.push(`/editProfile?user=${user.name}&email=${user.email}&avatar=${user.avatarUrl}`,);
          // alert('Edit Profile feature coming soon!');
        }}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  profilePictureContainer: {
    marginBottom: 30,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

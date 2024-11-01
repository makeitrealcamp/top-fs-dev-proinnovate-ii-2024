
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useAuth } from '@/src/context/AuthContext';
import { useRouter } from 'expo-router';

export default function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    // User is not authenticated
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image source={{ uri: user.avatarUrl }} style={styles.profilePicture} />
      </View>

      {/* User Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user.name}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>

        {/* Add more fields as needed */}
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate to Edit Profile page (to be implemented)
          // router.push('/edit-profile');
          alert('Edit Profile feature coming soon!');
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

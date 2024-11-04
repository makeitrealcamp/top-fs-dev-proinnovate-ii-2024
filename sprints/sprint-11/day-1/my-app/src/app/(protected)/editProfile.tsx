import React, { useState } from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from 'expo-router';

const EditProfile = () => {
  const { name, email, avatarUrl } = useLocalSearchParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Edit Profile',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: avatarUrl || selectedImage ||  require('../../assets/images/avatar.png')}}
          style={styles.profilePicture}
        />
      </View>
      <Button title="Edit profile image" onPress={pickImage} />

      <View style={styles.infoContainer}>
        <TextInput style={styles.label}>Name</TextInput>
        <TextInput style={styles.value}>{name}</TextInput>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{email}</Text>
      </View>
      <TouchableOpacity
        className="bg-blue-500 text-white p-2 rounded-md"
        onPress={() => alert('Profile updated!')}
      >
        <Text style={styles.button}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
  },
});

export default EditProfile;

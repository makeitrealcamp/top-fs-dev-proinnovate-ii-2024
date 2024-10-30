import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { Link } from 'expo-router';
import { useAuth } from '@/src/context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  // const [loading, setLoading] = useState<boolean>(false);

const {signUp, loading, error:supabaseError} = useAuth();

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }


    try {
      await signUp({ email, password });

      Alert.alert('Success', 'Account created successfully!');

    } catch (error: any) {
      console.error(error);
      Alert.alert('Signup Error', error.message);
      if (supabaseError) {
        Alert.alert('Signup Error', supabaseError);
      }
    } finally {
      // setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center px-4 bg-white">
      <Text className="text-3xl font-bold text-center mb-6">Sign Up</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
      />

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        className="border border-gray-300 rounded-md px-4 py-2 mb-6"
      />

      <TouchableOpacity
        onPress={handleSignup}
        className="bg-blue-500 rounded-md px-4 py-2 mb-4"
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-center text-lg">Sign Up</Text>
        )}
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="text-gray-600">Already have an account? </Text>
        <Link href="/login">
          <Text className="text-blue-500">Login</Text>
        </Link>
      </View>
    </View>
  );
};

export default Signup;

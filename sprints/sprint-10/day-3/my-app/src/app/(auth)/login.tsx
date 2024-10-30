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

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { loading, error: errorSupabase, login } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      await login({ email, password });
    } catch (error: any) {
      console.error(error);
      Alert.alert('Login Error', error.message);
      if (errorSupabase) {
        Alert.alert('Login Error', errorSupabase);
      }
    }
  };

  return (
    <View className="flex-1 justify-center px-4 bg-white">
      <Text className="text-3xl font-bold text-center mb-6">Login</Text>

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

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-500 rounded-md px-4 py-2 mb-4"
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-center text-lg">Login</Text>
        )}
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="text-gray-600">Doesn't have an account? </Text>
        <Link href="/signup">
          <Text className="text-blue-500">Sign Up</Text>
        </Link>
      </View>
    </View>
  );
};

export default Login;

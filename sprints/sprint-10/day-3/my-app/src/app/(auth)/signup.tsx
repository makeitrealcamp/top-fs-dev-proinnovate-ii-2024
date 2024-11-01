import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';

import { useForm, Controller } from 'react-hook-form';

import { Link } from 'expo-router';
import { useAuth } from '@/src/context/AuthContext';
import CustomInput from '@/src/components/CustomInput/CustomInput';
import { emailRegex } from '@/src/lib/regex';

type SignUpUser = {
  email: string;
  password: string;
  repeatedPassword: string;
};

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpUser>();

  const watchPassword = watch('password');

  const { signUp, loading, error: supabaseError } = useAuth();

  const onSubmit = async ({ email, password }: SignUpUser) => {
    try {
      await signUp({ email, password });
      if (supabaseError) {
        Alert.alert('Sign Up Error', supabaseError);
        return;
      }
      Alert.alert('Success', 'Account created successfully!');
    } catch (error: any) {
      Alert.alert('SignUp Error', error.message);
      if (supabaseError) {
        Alert.alert('SignUp Error', supabaseError);
      }
    }
  };

  const handleSignUp = async () => {
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
      Alert.alert('SignUp Error', error.message);
      if (supabaseError) {
        Alert.alert('SignUp Error', supabaseError);
      }
    } finally {
      // setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center px-4 bg-white">
      <Text className="text-3xl font-bold text-center mb-6">Sign Up</Text>

      <CustomInput
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: { value: emailRegex, message: 'Invalid email' },
        }}
        placeholder="Email"
        secureTextEntry={false}
        keyboardType="email-address"
      />
      <CustomInput
        name="password"
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
          maxLength: {
            value: 16,
            message: 'Password must be at most 16 characters',
          },
        }}
        placeholder="password"
        secureTextEntry={true}
      />
      <CustomInput
        name="repeatedPassword"
        control={control}
        rules={{
          required: 'Repeat password is required',
          validate: (value) =>
            value === watchPassword || 'Passwords do not match',
        }}
        placeholder="repeat password"
        secureTextEntry={true}
      />

      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
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

export default SignUp;

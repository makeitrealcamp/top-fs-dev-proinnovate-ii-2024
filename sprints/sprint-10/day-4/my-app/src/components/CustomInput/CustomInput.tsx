import React from 'react';
import {
  Control,
  Controller,
  UseControllerProps,
} from 'react-hook-form';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';

const CustomInput = ({
  control,
  name,
  placeholder,
  secureTextEntry=false,
  keyboardType,
  rules = {},
}: {
  control: Control;
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  rules: UseControllerProps['rules'];
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <View
            className={`border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md px-4 py-2 mb-4`}
          >
            <TextInput
              placeholder={placeholder}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
            />
          </View>
          {error && (
            <Text className="text-red-500 text-sm mb-4">{error?.message}</Text>
          )}
        </>
      )}
    />
  );
};

export default CustomInput;

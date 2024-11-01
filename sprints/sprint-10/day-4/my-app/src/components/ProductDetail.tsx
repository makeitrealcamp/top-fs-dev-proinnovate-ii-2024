
import axios from 'axios';
import { Stack, useLocalSearchParams, Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '~/types/Product';

export const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .then((err: unknown) => {
        setError(err?.message);
      });
  }, []);

  if (error) {
    return <Text>{error}</Text>;
  }
  if (!product) {
    return <Text>Loading...</Text>;
  }

  return (
    <View className="flex-1 p-4">
      <Stack.Screen
        options={{
          title: `${product.title}` || 'Product Detail',
        }}
      />
      <Text className="text-2xl mb-4 text-red-900">{product.title}</Text>
      <Text className="text-2xl mb-4 text-slate-800">{product.category}</Text>
      <Text className="text-2xl mb-4 text-slate-800">${product.price}</Text>
      <Image source={{ uri: product.image }} className="w-20 h-20 mr-4" />

      <Link href="/product/product">
        <Text className="text-blue-500">Back to products</Text>
      </Link>
    </View>
  );
};

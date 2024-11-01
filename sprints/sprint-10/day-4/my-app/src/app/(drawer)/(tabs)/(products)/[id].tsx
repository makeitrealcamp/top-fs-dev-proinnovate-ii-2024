import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import axios from 'axios';
import { useCart } from '@/src/context/CartContext';
import { Product } from '@/src/types/Product';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        setError('Failed to load product');
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
      router.setParams({ name:'john doe' });
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error || !product) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-red-500 text-lg">
          {error || 'Product not found'}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      {/* <Stack.Screen options={{ title: product.title }} /> */}
      <Image
        source={{ uri: product.image }}
        className="w-full h-64 mb-4"
        resizeMode="contain"
      />

      <Text className="text-2xl font-bold mb-2">{product.title}</Text>
      <Text className="text-lg text-gray-700 mb-2">${product.price}</Text>
      <Text className="text-base text-gray-600 mb-4">
        {product.description}
      </Text>

      <View className="flex-row items-center mb-4">
        <Text className="text-base mr-4">Quantity:</Text>
        <TouchableOpacity
          onPress={() => setQuantity((prev) => Math.max(prev - 1, 1))}
          className="p-2 border border-gray-300 rounded"
        >
          <AntDesign name="minus" size={20} color="black" />
        </TouchableOpacity>
        <Text className="mx-2 text-lg">{quantity}</Text>
        <TouchableOpacity
          onPress={() => setQuantity((prev) => prev + 1)}
          className="p-2 border border-gray-300 rounded"
        >
          <AntDesign name="plus" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => addToCart(product, quantity)}
        className="bg-blue-500 p-4 rounded"
      >
        <Text className="text-white text-center text-lg">Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductDetail;

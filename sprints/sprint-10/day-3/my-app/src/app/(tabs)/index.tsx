// Home.tsx
import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { Link } from 'expo-router';
import { Product } from '@/src/types/Product';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
        console.log({ products: res.data });
      })
      .catch((error) => {
        setError('Failed to load products');
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-red-500 text-lg">{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-slate-100 p-4">
      <View className="flex-row w-full justify-around items-center mb-4 bg-red-300">
        <Text className="text-2xl font-bold text-slate-800 ">My Store</Text>
        <TouchableOpacity>
          <AntDesign name="shoppingcart" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View className="mb-4">
        <TextInput
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          className="border border-gray-300 rounded-md px-4 py-2"
        />
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <TouchableOpacity className="flex-1 m-2 bg-gray-100 rounded-lg p-4">
              <Image
                source={{ uri: item.image }}
                className="w-full h-20 mb-2"
                resizeMode="contain"
              />
              <Text
                className="text-md font-semibold text-slate-700"
                numberOfLines={2}
              >
                {item.title}
              </Text>
              <Text className="text-lg font-bold text-slate-900 mt-1">
                ${item.price}
              </Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

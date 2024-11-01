import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import { Link } from 'expo-router';
import { Product } from '@/src/types/Product';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Animated from 'react-native-reanimated';
import RenderItem from '@/src/components/RenderItem';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = axios.get('https://fakestoreapi.com/products');
    const fetchCategories = axios.get(
      'https://fakestoreapi.com/products/categories'
    );

    Promise.all([fetchProducts, fetchCategories])
      .then(([productsRes, categoriesRes]) => {
        setProducts(productsRes.data);
        setCategories(categoriesRes.data);
      })
      .catch((error) => {
        setError('Failed to load data');
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const newArrivals = [...products].sort((a, b) => b.id - a.id).slice(0, 10);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <Text style={{ color: 'red', fontSize: 18 }}>{error}</Text>
      </View>
    );
  }

  const renderHeader = () => (
    <View>
      <View style={{ marginBottom: 16 }}>
        <ImageBackground
          source={{
            uri: 'https://unsplash.com/photos/clothes-store-interior-P3pI6xzovu0',
          }}
          style={{ width: '100%', height: 200 }}
          resizeMode="cover"
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}
          >
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#fff' }}>
              My Store
            </Text>
            <Text style={{ fontSize: 18, color: '#ddd' }}>
              Best products at the best prices
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={{ marginBottom: 16, paddingHorizontal: 16 }}>
        <TextInput
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingVertical: 8,
            backgroundColor: '#fff',
          }}
        />
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            paddingHorizontal: 16,
          }}
        >
          Categories
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          style={{ paddingHorizontal: 16 }}
        >
          {categories.map((item) => (
            <TouchableOpacity
              key={item}
              style={{
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 20,
                marginRight: 10,
              }}
              onPress={() => {
                setSearchQuery(item);
              }}
            >
              <Text style={{ textTransform: 'capitalize' }}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            paddingHorizontal: 16,
          }}
        >
          New Arrivals
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 16 }}
        >
          {/* <FlatList
            data={newArrivals}
            renderItem={({ item, index }) => {
              return <RenderItem item={item} index={index} />;
            }}
            showsVerticalScrollIndicator={false}
          /> */}
          {newArrivals.map((item) => (
            <Link href={`/${item.id}`} asChild key={item.id}>
              <TouchableOpacity
                style={{
                  width: 150,
                  marginRight: 10,
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  padding: 10,
                  position: 'relative',
                }}
              >
                <Animated.Image
                  source={{ uri: item.image }}
                  style={{ width: '100%', height: 100 }}
                  resizeMode="contain"
                  sharedTransitionTag={item.title}
                />
                <Text numberOfLines={2}>{item.title}</Text>
                <Text style={{ fontWeight: 'bold' }}>${item.price}</Text>

                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                  }}
                >
                  <AntDesign name="hearto" size={20} color="red" />
                </TouchableOpacity>
              </TouchableOpacity>
            </Link>
          ))}
        </ScrollView>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f1f5f9' }}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={renderHeader}
        renderItem={({ item, index }) => (
          <RenderItem item={item} index={index} />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

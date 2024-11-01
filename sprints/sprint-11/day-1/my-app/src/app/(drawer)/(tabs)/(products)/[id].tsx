import React, { useEffect, useState, useContext } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import axios from 'axios';
import { useCart } from '@/src/context/CartContext';
import { Product } from '@/src/types/Product';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import AddToCart from '@/src/components/AddToCart';
import  ProductDetailSkeleton  from '@/src/components/ProductDetailSkeleton';

const ProductDetail = () => {
  const { width } = useWindowDimensions();
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
    router.setParams({ name: 'john doe' });
  }, [id]);

  if (loading) {
    return (
      <View >
        {/* <ActivityIndicator size="large" color="#0000ff" />
         */}
        <ProductDetailSkeleton />
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
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Animated.Image
            entering={FadeInDown.delay(100)}
            // sharedTransitionTag={product.title}
            source={{ uri: product.image }}
            style={{
              width,
              height: width,
              // maxHeight: 300,
            }}
            resizeMode="contain"
          />
          <Animated.View
            style={styles.textContainer}
            entering={FadeInDown.delay(150)}
          >
            <Text numberOfLines={1} style={styles.textTitle}>
              {product.title}
            </Text>
            <Text style={styles.textPrice}>{product.price}</Text>
          </Animated.View>
        </View>
      </View>
      <View className="gap-2 items-center">
        <Animated.View entering={FadeInDown.delay(300)}>
          <Text
            numberOfLines={6}
            ellipsizeMode="tail"
            style={styles.textDescription}
          >
            {product.description}
          </Text>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(410)}
          className="flex-row items-center mb-4"
        >
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
        </Animated.View>

        <AddToCart />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -45,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
  textContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    bottom: 10,
    left: 10,
    right: 10,
    padding: 16,
    borderRadius: 20,
  },
  textTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textPrice: {
    color: 'white',
    fontSize: 16,
  },
  textDescription: {
    color: '#323232',
    fontSize: 14,
    margin: 10,
  },
  text: {
    color: '#323232',
    fontSize: 16,
    marginHorizontal: 10,
    textAlign: 'justify',
  },
});

export default ProductDetail;

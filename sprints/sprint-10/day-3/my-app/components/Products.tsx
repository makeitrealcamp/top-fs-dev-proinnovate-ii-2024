import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, FlatList, Image } from 'react-native'
import axios from 'axios'
import { Product } from '~/types/Product'
import { Link } from 'expo-router'

export const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null)
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setProducts(res.data)
      console.log({ products: res.data })
    })
  }, [])
  return (
    <View className='flex-1 p-4'>
      <Text className='text-2xl mb-4 text-slate-800'>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <TouchableOpacity className='flex-row items-center mb-4'>
              <Image source={{ uri: item.image }} className='w-10 h-10 mr-4' />
              <Text className='text-lg'>{item.title}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  )
}

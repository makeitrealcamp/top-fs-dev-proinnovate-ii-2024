import { View } from 'react-native';
import { ProductDetail } from '../../../components/ProductDetail';
import { Stack } from 'expo-router';

export default function ProductDetailPage() {
  console.log('rendering ProductDetail');
  return (
    <View className="flex-1 bg-white">
    
      <ProductDetail />
    </View>
  );
}

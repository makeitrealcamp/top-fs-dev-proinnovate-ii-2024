import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Animated, { FadeInDown } from 'react-native-reanimated';
import { Link } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

type Props = {
  item: any;
  index: number;
};

const RenderItem = ({ item, index }: Props) => {
  const [like, setLike] = useState(false);
  return (
    <Animated.View
      entering={FadeInDown.delay(200 * index)}
      style={{
        flex: 1,
        margin: 8,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        position: 'relative',
      }}
    >
      <Link href={`./${item.id}`}>
        <View
          style={{
            flex: 1,
            margin: 8,
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 10,
            position: 'relative',
          }}
        >
          <Animated.Image
            source={{ uri: item.image }}
            style={{ width: '100%', height: 150 }}
            resizeMode="contain"
            // sharedTransitionTag={item.title}
          />
          <Text numberOfLines={2}>{item.title}</Text>
          <Text style={{ fontWeight: 'bold' }}>${item.price}</Text>

          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            onPress={() => setLike(!like)}
          >
            <AntDesign name={like ? 'heart' : 'hearto'} size={20} color="red" />
          </TouchableOpacity>
        </View>
      </Link>
    </Animated.View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  textContainer: {
    margin: 20,
    flexShrink: 1,
    gap: 10,
  },
  textName: {
    color: '#323232',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textLocation: {
    color: '#323232',
    fontSize: 18,
  },
});

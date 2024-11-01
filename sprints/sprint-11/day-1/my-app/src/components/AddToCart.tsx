import {Pressable, StyleSheet, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const AddToCart = () => {
  const {width} = useWindowDimensions();
  const inset = useSafeAreaInsets();

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  return (
    <AnimatedPressable
      style={[
        styles.container,
        {width: width * 0.9, marginBottom: inset.bottom},
      ]}
      entering={FadeInDown.delay(500)}
      onPress={() => {
        alert('Added to cart');
      }}>
      <Text style={styles.text}>Add To Cart</Text>
    </AnimatedPressable>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c6cce',
    padding: 10,
    alignItems: 'center',
    borderRadius: 40,

  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
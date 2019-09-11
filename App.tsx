import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import PanningSlideshow from './components/PanningSlideshow';
import TintedImage from './components/TintedImage';

export default function App() {
  const PHOTO_SOURCE = require('./assets/photos/test.jpg');
  const IMAGE_SOURCE = require('./assets/cards/2_c.png');

  return (
    <View style={styles.container}>
      <PanningSlideshow />
      <Image blurRadius={1} style={[styles.photo, { width: 1600, height: 1600 }]} source={PHOTO_SOURCE} />
      <TintedImage imageSource={IMAGE_SOURCE} lightness={0.1} temperature={0.0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    position: 'absolute',
    bottom: 0,
    right: -350,
  },
});

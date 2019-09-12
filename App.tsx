import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import PanningSlideshow from './components/PanningSlideshow';
import TintedImage from './components/TintedImage';

export default function App() {
  const PHOTO_SOURCE = require('./assets/photos/test.jpg');
  const IMAGE_SOURCE = require('./assets/cards/2_c.png');

  const backImage = (<Image blurRadius={1} style={[styles.photo, { width: 1600, height: 1600 }]} source={PHOTO_SOURCE} />);
  const frontImage = (<TintedImage imageSource={IMAGE_SOURCE} lightness={0} temperature={0} />);

  return (
    <View style={styles.container}>
      <PanningSlideshow backImage={backImage} frontImage={frontImage} />
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

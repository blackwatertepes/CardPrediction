import React from 'react';
import { StyleSheet, View } from 'react-native';

import PanningSlideshow from './components/PanningSlideshow';
import TintedImage from './components/TintedImage';

export default function App() {
  const IMAGE_SOURCE = require('./assets/cards/2_c.png');

  return (
    <View style={styles.container}>
      <PanningSlideshow />
      <TintedImage imageSource={IMAGE_SOURCE} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

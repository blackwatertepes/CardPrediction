import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function TintedImage({ imageSource }) {

  return (
    <View style={styles.container}>
      <Image style={[styles.image, { width: 375, height: 500 }]} source={imageSource} />
      <Image style={[styles.image, { tintColor: 'rgba(200, 200, 200, 0.2)', width: 375, height: 500 }]} source={imageSource} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: 'absolute',
    bottom: 0,
  },
});

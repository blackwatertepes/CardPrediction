import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

export default function TintedImage({ imageSource, lightness, temperature }) {
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = 500;

  const red = (l, t) => {
    if (l > 0) {
      return 255 - 255 * t * -1;
    } else {
      return 100 * t;
    }
  }

  const green = (l, t) => {
    if (l > 0) {
      return 255 - 255 * t;
    } else {
      return 0;
    }
  }

  const blue = (l, t) => {
    if (l > 0) {
      return 255 - 255 * t;
    } else {
      return 50 * t * -1;
    }
  }

  const alpha = (l) => {
    return Math.abs(l);
  }

  const tintColor = () => {
    // return 'hsla(360, 100%, 80%, 0.8)';
    return `rgba(${red(lightness, temperature)}, ${green(lightness, temperature)}, ${blue(lightness, temperature)}, ${alpha(lightness, temperature)})`;
  }
  console.log("TintedImage:", imageSource);

  return (
    <View style={styles.container}>
      <Image style={[styles.image, { width: WIDTH, height: HEIGHT }]} source={imageSource} />
      <Image style={[styles.image, { tintColor: tintColor(), width: WIDTH, height: HEIGHT }]} source={imageSource} />
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

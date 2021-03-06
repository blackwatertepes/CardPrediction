import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import PanningSlideshow from './PanningSlideshow';
import TintedImage from './TintedImage';

type Props = {
  photo: string,
  tintProps: any, // TODO
}

export default function PhotoAlbum({ photo, tintProps }: Props) {
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;
  const PHOTO_SOURCE = require('./../assets/photos/test.jpg');
  const IMAGE_SOURCE = require('./../assets/cards/2_c.png');

  const backImage = (<Image blurRadius={1} style={[styles.photo, { width: 1600, height: 1600 }]} source={PHOTO_SOURCE} />);
  const frontImage = (
    <TintedImage imageSource={IMAGE_SOURCE} {...tintProps} >
      <Image source={{ uri: photo }} style={{ width: WIDTH, height: HEIGHT }} />
    </TintedImage>
  );

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

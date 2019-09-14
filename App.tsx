import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import CameraRoll from './components/CameraRoll';
import PanTintImage from './components/PanTintImage';
import PhotoAlbum from './components/PhotoAlbum';

import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate
} from 'react-native-color-matrix-image-filters';

const GrayscaledImage = (image) => (
  <Grayscale>
    {image}
  </Grayscale>
);

const CombinedFiltersImage = (image) => (
  <Tint amount={1.25}>
    <Sepia>
      {image}
    </Sepia>
  </Tint>
);

const ColorMatrixImage = (image) => (
  <ColorMatrix
    matrix={concatColorMatrices([saturate(-0.9), contrast(5.2), invert()])}
    // alt: matrix={[saturate(-0.9), contrast(5.2), invert()]}
  >
  {image}
  </ColorMatrix>
);

export default function App() {
  // These DEFAULT's should be blank, unless testing...
  const DEFAULT_PHOTO = "file:///Users/tylerkuhn/Library/Developer/CoreSimulator/Devices/5B41CCFE-0DA7-41C1-87DC-01F2185AE649/data/Containers/Data/Application/02EBC67B-D987-4D90-BECF-96B6035FBA08/Library/Caches/ExponentExperienceData/%2540anonymous%252FCardPrediction-c56a9b05-98a8-4810-a762-20c07adf667b/ImagePicker/C1BDE950-FCD4-45D2-A689-C7D44208D154.jpg"

  const IMAGE_SOURCE = require('./assets/cards/2_c.png');
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;

  const [photo, setPhoto] = useState(DEFAULT_PHOTO);
  const [tintProps, setTintProps] = useState(undefined);

  const onImage = (uri: string) => {
    console.log("photo:", uri);
    setPhoto(uri);
  }

  const onSetTint = (props) => {
    console.log("props:", props);
    setTintProps(props);
  }

  return (
    <View style={styles.container}>
      {!photo && (
        <CameraRoll onImage={onImage} />
      )}
      {!!photo && !tintProps && (
        <PanTintImage imageSource={IMAGE_SOURCE} onSetTint={onSetTint} >
          {GrayscaledImage(<Image source={{ uri: photo }} style={{ width: WIDTH, height: HEIGHT }} />)}
        </PanTintImage>
      )}
      {!!photo && !!tintProps && (
        <PhotoAlbum photo={photo} tintProps={tintProps} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

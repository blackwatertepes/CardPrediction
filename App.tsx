import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import CameraRoll from './components/CameraRoll';
import PanTintImage from './components/PanTintImage';
import PhotoAlbum from './components/PhotoAlbum';

export default function App() {
  const IMAGE_SOURCE = require('./assets/cards/2_c.png');
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;

  const [photo, setPhoto] = useState('');
  const [tintProps, setTintProps] = useState(undefined);

  const onImage = (uri: string) => {
    setPhoto(uri);
  }

  const onSetTint = (props) => {
    setTintProps(props);
  }

  // TODO: Get Pan to work with PanTintImage
  return (
    <View style={styles.container}>
      {!photo && (
        <CameraRoll onImage={onImage} />
      )}
      {!!photo && !tintProps && (
        <View>
          <Image source={{ uri: photo }} style={{ width: WIDTH, height: HEIGHT }} />
          <PanTintImage imageSource={IMAGE_SOURCE} onSetTint={onSetTint} />
        </View>
      )}
      {!!photo && !!tintProps && (
        <PhotoAlbum backImage={photo} tintProps={tintProps} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

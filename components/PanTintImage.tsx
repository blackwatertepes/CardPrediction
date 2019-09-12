import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Pan from './Pan';
import TintedImage from './TintedImage';

type Props = {
  imageSource: React.Element,
}

export default function PanTintImage({ imageSource, onSetTint }: Props) {
  const [lightness, setLightness] = useState(0);
  const [temp, setTemp] = useState(0);

  const onMove = ({ dx, dy, radians }) => {
    setLightness(dy * -0.01);
    setTemp(dx * -0.01);
  }

  // TODO: Implement the onSetTint callback

  return (
    <View style={styles.container}>
      <TintedImage imageSource={imageSource} lightness={lightness} temperature={temp} />
      <Pan cols={1} onMove={onMove} rows={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

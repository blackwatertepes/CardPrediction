import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Pan from './Pan';
import TintedImage from './TintedImage';

type Props = {
  imageSource: React.Element,
  onSetTint: Function,
}

export default function PanTintImage({ children, imageSource, onSetTint }: Props) {
  const [lightness, setLightness] = useState(0);
  const [temperature, setTemp] = useState(0);

  const onMove = ({ dx, dy, radians }) => {
    setLightness(dy * -0.01);
    setTemp(dx * -0.01);
  }

  const onUp = ({}) => {
    onSetTint({ lightness, temperature });
  }

  return (
    <View style={styles.container}>
      {children}
      <TintedImage imageSource={imageSource} lightness={lightness} temperature={temperature} />
      <Pan cols={1} onMove={onMove} onUp={onUp} rows={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

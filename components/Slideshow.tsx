import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

type Props = {
  backImage?: React.Element,
  frontImage?: React.Element,
  info?: string,
  offset?: number,
}

export default function Slideshow({ backImage, frontImage, info, offset }: Props) {
  const WIDTH = Dimensions.get('window').width;

  return (
    <View style={[styles.container, styles.centered]}>
      <View style={[styles.container, styles.slideBack]}>
        {backImage}
        <Text>Back: {info}</Text>
      </View>
      <View style={[styles.container, styles.slideFront]} left={-WIDTH + offset}>
        {frontImage}
        <Text>Front: {info}</Text>
      </View>
      <Text>Offset: {offset}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 20,
  },
  slideBack: {
    backgroundColor: `rgb(255, 200, 200)`,
  },
  slideFront: {
    backgroundColor: `rgb(200, 255, 200)`,
  },
});

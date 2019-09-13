import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

type Props = {
  backImage?: React.Element,
  frontImage?: React.Element,
  offset?: number,
}

export default function Slideshow({ backImage, frontImage, offset }: Props) {
  const WIDTH = Dimensions.get('window').width;

  return (
    <View style={[styles.container, styles.centered]}>
      <View style={[styles.container, styles.slideBack]}>
        {backImage}
      </View>
      <View style={[styles.container, styles.slideFront]} left={-WIDTH + offset}>
        {frontImage}
      </View>
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
    backgroundColor: `rgb(0, 0, 0)`,
  },
  slideFront: {
    backgroundColor: `rgb(0, 0, 0)`,
  },
});

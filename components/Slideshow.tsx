import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

type Props = {
  backImageUrl?: string,
  frontImageUrl?: string,
  offset?: number,
}

export default function Slideshow({ backImageUrl, frontImageUrl, offset }: Props) {

  return (
    <View style={[styles.container, styles.centered]}>
      <View style={[styles.container, styles.slideBack]}>
        <Text>{backImageUrl}</Text>
      </View>
      <View style={[styles.container, styles.slideFront]} left={offset}>
        {frontImageUrl && (
          <Text>{frontImageUrl}</Text>
        )}
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
    backgroundColor: `rgb(200, ${Math.random() * 200 + 50}, 200)`,
  },
  slideFront: {
    backgroundColor: `rgb(${Math.random() * 200 + 50}, 200, 200)`,
  },
});

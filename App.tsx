import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import PhotoAlbum from './components/PhotoAlbum';

export default function App() {
  return (
    <View style={styles.container}>
      <PhotoAlbum />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

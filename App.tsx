import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TouchableGrid from './components/TouchableGrid';

export default function App() {
  const onPress = ({ col, row }) => () => {
    console.log("DEBUG::TouchableGrid::_handlePress::col_and_row:", col, row)
  }

  return (
    <View style={styles.container}>
      <TouchableGrid onPress={onPress} cols={3} rows={5} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

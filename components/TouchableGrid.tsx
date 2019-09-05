
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Cell ={
  col: number,
  deltaX: number,
  deltaY: number,
  radians: number,
  row: number,
}

type Props = {
  cols: number,
  onPress: Function<Cell>,
  rows: number,
}

export default function TouchableGrid(props: Props) {
  const { cols, onPress, rows } = props;

  ROW_VALUES = []
  COL_VALUES = []

  const [page, setPage] = React.useState({ pageX: 0, pageY: 0});

  for (let row = 1; row <= rows; row++) {
    ROW_VALUES.push(row)
  }

  for (let col = 1; col <= cols; col++) {
    COL_VALUES.push(col)
  }

  const _onPressIn = (event) => {
    const { pageX, pageY } = event.nativeEvent;
    setPage({ pageX, pageY });
  }

  const _onPress = ({ col, row }) => (event) => {
    const { pageX, pageY } = event.nativeEvent;
    const deltaX = page.pageX - pageX;
    const deltaY = page.pageY - pageY;
    const radians = Math.atan2(deltaY, deltaX)
    onPress({ col, row, deltaX, deltaY, radians });
  }

  return (
    <View style={styles.container}>
      {ROW_VALUES.map((rowValue, rowIndex) => {
        return (
          <View style={styles.row}>
            {COL_VALUES.map((colValue, colIndex) => {
              return (
                <TouchableOpacity
                  key={`cell_${rowIndex}_${colIndex}`}
                  onPress={_onPress({ col: colValue, row: rowValue })}
                  onPressIn={_onPressIn}
                  style={[styles.cell, { backgroundColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` }]}
                >
                  <Text>{colValue} X {rowValue}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});

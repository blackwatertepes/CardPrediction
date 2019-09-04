
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Cell ={
  col: number,
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

  for (let row = 1; row <= rows; row++) {
    ROW_VALUES.push(row)
  }

  for (let col = 1; col <= cols; col++) {
    COL_VALUES.push(col)
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
                  onPress={onPress({ col: colValue, row: rowValue })}
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

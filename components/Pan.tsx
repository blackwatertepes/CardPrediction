import React, { useState } from 'react';
import { Dimensions, PanResponder, StyleSheet, View } from 'react-native';

type Props = {
  cols: number,
  onDown?: Function,
  onMove?: Function,
  onUp?: Function,
  rows: number,
}

export default function Pan({ cols, onDown, onMove, onUp, rows }: Props) {
  const [initX, setInitX] = useState(0);
  const [initY, setInitY] = useState(0);

  const col = (x: number): number => {
    const width = Dimensions.get('window').width;
    const colWidth = width / cols;
    return Math.floor(x / colWidth);
  }

  const row = (y: number): number => {
    const height = Dimensions.get('window').height;
    const rowHeight = height / rows;
    return Math.floor(y / rowHeight);
  }

  const panResponder = PanResponder.create({
    // Ask to be the responder:
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    onPanResponderGrant: (evt, gestureState) => {
      const { x0:x, y0:y } = gestureState;
      // The gesture has started. Show visual feedback so the user knows
      // what is happening!
      // gestureState.d{x,y} will be set to zero now
      // console.log("PanResponder::onPanResponderGrant: x:", x, " y:", y);
      console.log("PanResponder::onPanResponderGrant: col:", col(x), " row:", row(y));

      setInitX(x);
      setInitY(y);

      if (!!onDown) {
        onDown({ col: col(x), row: row(y) });
      }
    },
    onPanResponderMove: (evt, gestureState) => {
      const { moveX, moveY } = gestureState;
      // The most recent move distance is gestureState.move{X,Y}
      // The accumulated gesture distance since becoming responder is
      // gestureState.d{x,y}
      const dx = moveX - initX;
      const dy = moveY - initY;

      const radians = Math.atan2(dy, dx);
      // console.log("PanResponder::onPanResponderMove: radians:", radians);
      if (!!onMove) {
        onMove({ radians, dx, dy });
      }
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      const { moveX, moveY } = gestureState;
      // The user has released all touches while this view is the
      // responder. This typically means a gesture has succeeded
      const dx = initX - moveX;
      const dy = initY - moveY;
      console.log("PanResponder::onPanResponderRelease: dx:", dx, " dy:", dy);

      if (!!onUp) {
        onUp({ dx, dy });
      }
    },
    onPanResponderTerminate: (evt, gestureState) => {
      // Another component has become the responder, so this gesture
      // should be cancelled
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      // Returns whether this component should block native components from becoming the JS
      // responder. Returns true by default. Is currently only supported on android.
      return true;
    },
  });

  return (
    <View {...panResponder.panHandlers} style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
});

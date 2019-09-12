import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

import Pan from './Pan';
import Slideshow from './Slideshow';

type Props = {
  backImage?: React.Element,
  frontImage?: React.Element,
}

export default function PanningSlideshow({ backImage, frontImage }: Props) {
  const [slideX, setSlideX] = useState(0);
  const [suit, setSuit] = useState('');
  const [value, setValue] = useState(0);
  const COLS = 3;
  const ROWS = 5;

  const setSuitFromRadians = (radians: number) => {
    const delta = 0.5;
    if (radians < 0) {
      if (radians < -delta) {
        setSuit('diamonds')
      } else {
        setSuit('hearts')
      }
    } else {
      if (radians > delta) {
        setSuit('spades')
      } else {
        setSuit('clubs')
      }
    }
  }

  const setValueFromLocation = ({ col, row }) => {
    const value = row * COLS + col + 1;
    setValue(value);
  }

  const cardName = (value: number) => {
    if (value === 1) {
      return 'Ace'
    } else if (value === 2) {
      return 'Two'
    } else if (value === 3) {
      return 'Three'
    } else if (value === 4) {
      return 'Four'
    } else if (value === 5) {
      return 'Five'
    } else if (value === 6) {
      return 'Six'
    } else if (value === 7) {
      return 'Seven'
    } else if (value === 8) {
      return 'Eight'
    } else if (value === 9) {
      return 'Nine'
    } else if (value === 10) {
      return 'Ten'
    } else if (value === 11) {
      return 'Jack'
    } else if (value === 12) {
      return 'Queen'
    } else {
      return 'King'
    }
  }

  const cardString = ({ value, suit }) => {
    return `${cardName(value)} of ${suit}`;
  }

  const onDown = ({ col, row }) => {
    setValueFromLocation({ col, row });
  }

  const onMove = ({ dx, dy, radians }) => {
    setSlideX(dx);
    setSuitFromRadians(radians)
  }

  const onUp = ({ dx, dy }) => {
    // TODO: Animate the frontImage sliding right
    setSlideX(Dimensions.get('window').width);
  }

  return (
    <View style={styles.container}>
      <Slideshow backImage={backImage} frontImage={frontImage} info={cardString({ value, suit })} offset={slideX} />
      <Pan cols={COLS} onDown={onDown} onMove={onMove} onUp={onUp} rows={ROWS} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

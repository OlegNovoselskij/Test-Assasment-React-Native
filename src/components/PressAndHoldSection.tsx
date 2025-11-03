import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {usePressAndHold} from '../hooks/usePressAndHold';
import CardWrapper from './ui/CardWrapper';
import SectionTitle from './ui/SectionTitle';
import HelperText from './ui/HelperText';
import Button from './ui/Button';

const TIME_DELAY = 1000;

export function PressAndHoldSection() {
  const {onPressIn, onPressOut, isHeld} = usePressAndHold(() => {}, TIME_DELAY);

  return (
    <CardWrapper>
      <SectionTitle>Press and Hold</SectionTitle>
      <Button
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={[styles.holdButton, isHeld ? styles.holdButtonHeld : null]}
        textStyle={[styles.holdButtonText, isHeld ? styles.heldText : null]}
        variant="secondary"
      >
        {isHeld ? 'Held' : 'Press and hold'}
      </Button>
      <HelperText>Hold for ≥ 1 second to change color.</HelperText>
    </CardWrapper>
  );
}

const styles = StyleSheet.create({
  holdButton: {
    height: 64,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
  },
  holdButtonHeld: {
    backgroundColor: '#2563EB',
  },
  holdButtonText: {
    fontWeight: '600',
    color: '#111827',
  },
  heldText: {
    color: 'white',
  },
  
});

export default PressAndHoldSection;



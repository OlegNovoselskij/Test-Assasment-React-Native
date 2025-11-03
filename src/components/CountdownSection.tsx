import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useCountdown} from '../hooks/useCountdown';
import CardWrapper from './ui/CardWrapper';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

export function CountdownSection() {
  const {timeLeft, isRunning, start, pause, reset} = useCountdown(60);

  const toggleRun = () => {
    if (isRunning) {
      pause();
    } else {
      start();
    }
  };

  return (
    <CardWrapper>
      <SectionTitle>Countdown Timer</SectionTitle>
      <SectionTitle style={styles.timeValue}>{timeLeft}s</SectionTitle>
      <View style={styles.buttonsRow}>
        <Button onPress={toggleRun} style={styles.primary}>
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button
          onPress={reset}
          style={styles.secondary}
          textStyle={styles.secondaryText}
        >
          Reset
        </Button>
      </View>
    </CardWrapper>
  );
}

const styles = StyleSheet.create({
  timeValue: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
    color: '#222',
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  primary: {
    flex: 1,
  },
  secondary: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  secondaryText: {
    color: '#111827',
  },
});

export default CountdownSection;



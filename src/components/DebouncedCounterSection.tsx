import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDebounce} from '../hooks/useDebounce';
import CardWrapper from './ui/CardWrapper';
import SectionTitle from './ui/SectionTitle';
import HelperText from './ui/HelperText';
import Button from './ui/Button';

const DEBOUNCE_DELAY = 2000;

export function DebouncedCounterSection() {
  const [count, setCount] = useState<number>(0);

  const debouncedIncrement = useDebounce(() => {
    setCount(prev => prev + 1);
  }, DEBOUNCE_DELAY);

  return (
    <CardWrapper>
      <SectionTitle>Debounced Counter</SectionTitle>
      <HelperText style={styles.countValue}>{count}</HelperText>
      <Button onPress={debouncedIncrement} style={styles.button}>
        Increment
      </Button>
      <HelperText>
        Increments only if no new presses occur within {DEBOUNCE_DELAY/1000} seconds.
      </HelperText>
    </CardWrapper>
  );
}

const styles = StyleSheet.create({
  countValue: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
    color: '#222',
  },
  button: {
    backgroundColor: '#0F766E',
  },
});



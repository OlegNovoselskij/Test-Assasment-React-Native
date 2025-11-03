import React from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';

type HelperTextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

export default function HelperText({children, style}: HelperTextProps) {
  return <Text style={[styles.helperText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  helperText: {
    marginTop: 8,
    fontSize: 12,
    color: '#4B5563',
  },
});



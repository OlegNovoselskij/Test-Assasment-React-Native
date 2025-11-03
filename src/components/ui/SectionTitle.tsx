import React from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';

type SectionTitleProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

export default function SectionTitle({children, style}: SectionTitleProps) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#111',
  },
});



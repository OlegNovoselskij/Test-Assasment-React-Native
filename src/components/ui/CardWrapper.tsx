import React from 'react';
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native';

type CardWrapperProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function CardWrapper({children, style}: CardWrapperProps) {
  return <View style={[styles.cardWrapper, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
});



import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

type ButtonProps = Omit<PressableProps, 'style' | 'children'> & {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  variant?: 'primary' | 'secondary' | 'link';
};

export default function Button({
  children,
  style,
  textStyle,
  variant = 'primary',
  ...pressableProps
}: ButtonProps) {
  return (
    <Pressable
      {...pressableProps}
      style={[styles.buttonBase, variantStyles.button[variant], style]}
    >
      <Text style={[styles.textBase, variantStyles.text[variant], textStyle]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textBase: {
    fontWeight: '600',
  },
});

const variantStyles = {
  button: {
    primary: {backgroundColor: '#111827'} as ViewStyle,
    secondary: {backgroundColor: '#F3F4F6'} as ViewStyle,
    link: {backgroundColor: 'transparent'} as ViewStyle,
  },
  text: {
    primary: {color: 'white'} as TextStyle,
    secondary: {color: '#111827'} as TextStyle,
    link: {color: '#2563EB'} as TextStyle,
  },
};



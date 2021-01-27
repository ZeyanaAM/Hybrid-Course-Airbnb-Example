import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const AppText = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'AirbnbCerealApp-Book',
    fontSize: 19,
    fontWeight: '100',
  },
});

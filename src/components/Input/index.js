import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export const Input = props => {
  return <TextInput {...props} style={{...styles.textInput, ...props.style}} />;
};

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

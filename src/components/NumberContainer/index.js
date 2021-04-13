import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../themes';

export const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

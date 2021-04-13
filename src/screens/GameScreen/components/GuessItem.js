import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const GuessItem = ({data, numOfRounds}) => {
  return (
    <View style={styles.container}>
      <Text>#{numOfRounds}</Text>
      <Text>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '60%',
  },
});

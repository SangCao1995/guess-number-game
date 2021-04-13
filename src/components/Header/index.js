import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7287b',
  },

  headerTitle: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
  },
});

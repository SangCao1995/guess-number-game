import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

export const GuessItem = ({data, numOfRounds}) => {
  const [availableDevideWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get('window').width,
  );
  let listContainer = styles.listContainer;
  if (availableDevideWidth < 350) {
    listContainer = styles.listContainerBig;
  }

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  return (
    <View style={[styles.container, listContainer]}>
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
  },
  listContainer: {
    width: '60%',
  },
  listContainerBig: {
    width: '80%',
  },
});

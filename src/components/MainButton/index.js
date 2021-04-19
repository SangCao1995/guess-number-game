import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';
import {Colors} from '../../themes';

export const MainButton = props => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={{borderRadius: 25, overflow: 'hidden'}}>
      <ButtonComponent onPress={props.onPress} activeOpacity={0.8}>
        <View style={styles.button}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: Colors.primary,
    borderRadius: 25,
  },
  text: {
    color: 'white',
    fontFamily: 'OpenSans-Regular',
    fontSize: 18,
  },
});

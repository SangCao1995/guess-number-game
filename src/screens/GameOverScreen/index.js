import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {Images} from '../../images';
import {Colors} from '../../themes';
import {MainButton} from '../../components';

export const GameOverScreen = ({numRounds, userNumber, onStartGame}) => {
  return (
    <View style={styles.screen}>
      <Text style={{fontSize: 18, fontFamily: 'OpenSans-Bold'}}>
        The Game is Over!
      </Text>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          source={Images.img_success}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{marginHorizontal: 30, marginVertical: 15}}>
        <Text>
          Your phone need{' '}
          <Text style={{color: Colors.primary, fontFamily: 'OpenSans-Bold'}}>
            {numRounds}
          </Text>{' '}
          rounds to guess the number{' '}
          <Text style={{color: Colors.primary, fontFamily: 'OpenSans-Bold'}}>
            {userNumber}
          </Text>
        </Text>
      </View>
      <MainButton onPress={onStartGame}>START GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
});

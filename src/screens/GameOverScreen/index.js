import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Images} from '../../images';
import {Colors} from '../../themes';
import {MainButton} from '../../components';

export const GameOverScreen = ({numRounds, userNumber, onStartGame}) => {
  const [availableDevideWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get('window').width,
  );

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
    <ScrollView>
      <View style={styles.screen}>
        <Text style={{fontSize: 18, fontFamily: 'OpenSans-Bold'}}>
          The Game is Over!
        </Text>
        <View
          style={[
            styles.imageContainer,
            {
              width: availableDevideWidth * 0.7,
              height: availableDevideWidth * 0.7,
              borderRadius: (availableDevideWidth * 0.7) / 2,
            },
          ]}>
          <Image
            fadeDuration={1000}
            source={Images.img_success}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={{marginHorizontal: 30, marginVertical: height / 60}}>
          <Text style={{textAlign: 'center', fontSize: width < 350 ? 16 : 20}}>
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
    </ScrollView>
  );
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: height / 30,
  },
});

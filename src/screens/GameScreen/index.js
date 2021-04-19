import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Card, NumberContainer, MainButton} from '../../components';
import {GuessItem} from './components';
import Icon from '../../images/icons';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

export const GameScreen = ({userChoice, onGameOver}) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuess, setPastGuess] = useState([]);
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get('window').height,
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuess.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get('window').height);
    };

    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  const nextGuessHandle = direction => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setPastGuess(curPastGuess => [nextNumber, ...curPastGuess]);
  };

  if (availableDeviceHeight < 500) {
    return (
      <View style={styles.screen}>
        <Text>Sang's Guess</Text>
        <View style={styles.controls}>
          <MainButton onPress={() => nextGuessHandle('lower')}>
            <Icon.Ionicons name={'md-remove'} size={24} color={'white'} />
          </MainButton>
          <NumberContainer>{currentGuess}</NumberContainer>

          <MainButton onPress={() => nextGuessHandle('greater')}>
            <Icon.Ionicons name={'md-add'} size={24} color={'white'} />
          </MainButton>
        </View>

        <View style={{flex: 1, width: '80%'}}>
          <ScrollView contentContainerStyle={styles.list}>
            {pastGuess.map((guess, index) => (
              <GuessItem
                key={guess}
                data={guess}
                numOfRounds={pastGuess.length - index}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <Text>Sang's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonWrapper}>
        <MainButton onPress={() => nextGuessHandle('lower')}>
          <Icon.Ionicons name={'md-remove'} size={24} color={'white'} />
        </MainButton>
        <MainButton onPress={() => nextGuessHandle('greater')}>
          <Icon.Ionicons name={'md-add'} size={24} color={'white'} />
        </MainButton>
      </Card>
      <View style={{flex: 1, width: '80%'}}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuess.map((guess, index) => (
            <GuessItem
              key={guess}
              data={guess}
              numOfRounds={pastGuess.length - index}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    minWidth: 300,
    maxHeight: '95%',
    marginTop: height > 600 ? 20 : 5,
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  controls: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

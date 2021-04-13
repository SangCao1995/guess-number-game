import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, Text, Alert, ScrollView} from 'react-native';
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
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuess.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 350,
    marginTop: 20,
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

import React, {useState} from 'react';
import {View} from 'react-native';
import {Header} from '../../components';
import {GameScreen} from '../GameScreen';
import {StartGameScreen} from '../StartGameScreen';
import {GameOverScreen} from '../GameOverScreen';

export const MainScreen = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandle = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandle = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  const configureNewGameHandle = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandle} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandle} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        numRounds={guessRounds}
        userNumber={userNumber}
        onStartGame={configureNewGameHandle}
      />
    );
  }

  return (
    <View style={{flex: 1}}>
      <Header title={'Guess a number'} />
      {content}
    </View>
  );
};

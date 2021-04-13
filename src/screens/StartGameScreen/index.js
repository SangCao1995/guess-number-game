import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {Card, Input, NumberContainer, MainButton} from '../../components';
import {Colors} from '../../themes';

export const StartGameScreen = ({onStartGame}) => {
  const [enterValue, setEnterValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const changeValueTextHandle = enterText => {
    setEnterValue(enterText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandle = () => {
    setEnterValue('');
    setConfirmed(false);
  };

  const confirmInputHandle = () => {
    const choosenNumber = parseInt(enterValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99.',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandle}],
      );
    }
    setConfirmed(true);
    setSelectedNumber(choosenNumber);
    setEnterValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputWrapper}>
          <Text>Select a Number</Text>
          <Input
            style={{width: 50, textAlign: 'center'}}
            blurOnSubmit
            autoCapitalize={'none'}
            keyboardType={'number-pad'}
            maxLength={2}
            autoCorrect={false}
            value={enterValue}
            onChangeText={changeValueTextHandle}
          />
          <View style={styles.buttonWrapper}>
            <View style={{width: 100}}>
              <Button
                title={'Reset'}
                onPress={resetInputHandle}
                color={Colors.accent}
              />
            </View>
            <View style={{width: 100}}>
              <Button
                title={'Confirm'}
                onPress={confirmInputHandle}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'OpenSans-Bold',
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inputWrapper: {
    width: 300,
    alignItems: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

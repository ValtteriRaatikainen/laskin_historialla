import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Alert, Button, FlatList, TextInput } from 'react-native';

export default function Calculator({ navigation }) {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [history, setHistory] = useState([]); // Tähän tallennetaan laskuhistoria

  const plusPressed = () => {
    const result = Number(num1) + Number(num2);
    Alert.alert('Result: ' + result);

    // Lisätään tulos historiaan
    setHistory([...history, { operation: `${num1} + ${num2}`, result }]);
  };

  const minusPressed = () => {
    const result = Number(num1) - Number(num2);
    Alert.alert('Result: ' + result);

    // Lisätään tulos historiaan
    setHistory([...history, { operation: `${num1} - ${num2}`, result }]);
  };

  handleHistory = () => {
    navigation.navigate("History", { historyData: history });
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={num1 => setNum1(num1)} value={num1} inputMode='numeric' />
      <TextInput style={styles.input} onChangeText={num2 => setNum2(num2)} value={num2} inputMode='numeric' />
      <View style={styles.buttonContainer}>
        <Button onPress={plusPressed} title="+" />
        <Button onPress={minusPressed} title="-" />
      </View>

      <Button
        title="History"
        onPress={(handleHistory)} // Navigate to Settings screen
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [luku1, asetaLuku1] = useState(0);
  const [luku2, asetaLuku2] = useState(0);
  const [tulos, laskeTulos] = useState('');

  const naytaSumma = () => laskeTulos(parseInt(luku1) + parseInt(luku2));
  const naytaErotus = () => laskeTulos(parseInt(luku1) - parseInt(luku2));

  return (
    <View style={styles.container}>
      <Text>Result: {tulos}</Text>
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={luku1 => asetaLuku1(luku1)} value={luku1} />
      <TextInput style={styles.input} keyboardType='numeric' onChangeText={luku2 => asetaLuku2(luku2)} value={luku2} />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button onPress={naytaSumma} title="+" />
        </View>
        <View style={styles.button}>
          <Button onPress={naytaErotus} title="-" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: 30,
    margin: 10,
  },
});

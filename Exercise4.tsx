import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextInput from './components/index';
import Button from './components/button';
import Title from './components/title';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      <Title />
      <TextInput placeholder="Masukkan email anda" />
      <TextInput placeholder="Masukkan password anda" />
      <Button text="Sign-In" />
      <Button text="Google" color="red" textColor="white" />
      <Button text="Facebook" color="blue" textColor="white" />
      <Button text="Apple" color="black" textColor="white" />
    </View>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 35,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 17,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#ff7f00',
    padding: 17,
    borderRadius: 10,
    marginVertical: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

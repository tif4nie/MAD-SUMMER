import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import TextInput from './components';
import Button from './components/button';
const SignInApp = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput placeholder={'Masukkan email anda'} />
      <Text style={styles.label}>Password</Text>
      <TextInput placeholder={'Masukkan password anda'} />

      <Button />
    </ScrollView>
  );
};

export default SignInApp;

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

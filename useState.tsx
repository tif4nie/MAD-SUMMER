import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInput from './components'; // Pastikan jalur ini benar
import Button from './components/Button'; // Pastikan jalur ini benar

const Login = () => {
  const [title, setTitle] = useState('Welcome');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {
    if (email.trim() === '') {
      console.log('Email tidak boleh kosong');
      return;
    }
    setTitle(`Selamat Datang ${email}`);
    console.log({email, password});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder="Masukan email anda"
        onChangeText={e => setEmail(e)}
      />
      <TextInput
        placeholder="Masukan password anda"
        secureTextEntry={true}
        onChangeText={e => setPassword(e)}
      />
      <Button text="Sign In" onPress={onSignIn} />
      <Button text="Create new account" color="grey" textColor="white" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});

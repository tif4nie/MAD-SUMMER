import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TitleComponent from './components/TitleComponent';
import ButtonComponent from './components/ButtonComponent';
import TextInputComponent from './components/TextInputComponent';

const Registration = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    console.log({
      Name: name,
      Username: username,
      Email: email,
      Address: address,
      PhoneNumber: phoneNumber,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TitleComponent text="Registration" />
      <TextInputComponent
        label="Name"
        placeholder="Masukan nama lengkap anda"
        value={name}
        onChangeText={setName}
      />
      <TextInputComponent
        label="Username"
        placeholder="Masukan username anda"
        value={username}
        onChangeText={setUsername}
      />
      <TextInputComponent
        label="Email"
        placeholder="Masukan email anda"
        value={email}
        onChangeText={setEmail}
      />
      <TextInputComponent
        label="Address"
        placeholder="Masukan alamat anda"
        value={address}
        onChangeText={setAddress}
      />
      <TextInputComponent
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <ButtonComponent onPress={handleRegister} text="Register" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});

export default Registration;

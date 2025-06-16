import React from 'react';
import {TextInput as Input, StyleSheet} from 'react-native';

const TextInput = ({placeholder}: {placeholder: any}) => {
  return <Input style={styles.input} placeholder={placeholder} />;
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 14,
    color: 'black',
  },
});

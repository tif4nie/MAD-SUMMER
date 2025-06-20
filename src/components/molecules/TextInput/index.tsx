import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({text, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{text}</Text>
      <Input
        placeholder={placeholder}
        placeholderTextColor="#8D92A3"
        style={styles.input}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
    marginBottom: 6,
  },
  input: {
    borderColor: '#C4C4C4',
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    color: '#020202',
  },
});

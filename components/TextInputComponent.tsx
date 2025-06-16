import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const TextInputComponent = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
}) => {
  const handleChangeText = text => {
    if (keyboardType === 'numeric') {
      const numbersOnly = text.replace(/[^0-9]/g, '');
      onChangeText(numbersOnly);
    } else {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChangeText}
        keyboardType={keyboardType}
        placeholderTextColor="#ccc"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 25,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 17,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    fontSize: 15,
  },
});

export default TextInputComponent;

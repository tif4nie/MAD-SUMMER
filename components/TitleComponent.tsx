import React from 'react';
import {Text, StyleSheet} from 'react-native';

const TitleComponent = () => {
  return <Text style={styles.title}>Registration</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'black',
  },
});

export default TitleComponent;

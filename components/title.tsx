import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = () => {
  return <Text style={styles.title}>Welcome</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 35,
    color: 'Black',
  },
});

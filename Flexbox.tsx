import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer} />
      <View style={styles.greenContainer} />
      <View style={styles.blueContainer} />
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 0.5,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redContainer: {
    backgroundColor: 'powderblue',
    height: 100,
    width: 100,
  },
  greenContainer: {
    backgroundColor: 'skyblue',
    height: 100,
    width: 100,
  },
  blueContainer: {
    backgroundColor: 'steelblue',
    height: 100,
    width: 100,
  },
});

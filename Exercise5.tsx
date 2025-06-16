import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Exercise5 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.black} />
        <View style={styles.yellow} />
        <View style={styles.black} />
      </View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('./assets/logo-with-motto-3.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.black} />
        <View style={styles.yellow} />
        <View style={styles.black} />
      </View>
    </View>
  );
};

export default Exercise5;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 150,
    paddingHorizontal: 16,
    gap: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 150,
  },
  black: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
  },
  yellow: {
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 90,
  },
});

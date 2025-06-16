import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RegistrationScreen from './Exercise6';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <RegistrationScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;

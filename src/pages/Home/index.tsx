import {View, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header/index_home';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header text1="Hi, Jane Doe" text2="Have you track your money today?" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;

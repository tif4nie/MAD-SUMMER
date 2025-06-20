import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Header = ({text = 'Hi, John Doe'}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.subText}>Have you track your money today?</Text>
      </View>
      <Image source={require('../../../assets/pic.png')} style={styles.image} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    marginRight: 16,
  },
  text: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    fontWeight: '600',
  },
  subText: {
    color: '#8D92A3',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import Svg, {Circle} from 'react-native-svg';
import NullPhoto from '../../assets/null-photo 1.svg';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header text="Sign Up" />
      <View style={styles.contentContainer}>
        <Gap height={24} />
        <View style={styles.avatarContainer}>
          <Svg height="100" width="100" style={styles.circle}>
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="#C4C4C4"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
            />
          </Svg>
          <View style={styles.iconWrapper}>
            <NullPhoto width={48} height={48} />
          </View>
        </View>
        <Gap height={26} />
        <TextInput text="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput text="Email Address" placeholder="Type your email address" />
        <Gap height={16} />
        <TextInput text="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button text="Continue" />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    fontFamily: 'Poppins',
    fontSize: 22,
    lineHeight: 100,
    fontWeight: '500',
    letterSpacing: 0,
  },
  contentContainer: {
    flex: 1,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 100,
    letterSpacing: 0,
    marginTop: 24,
    marginHorizontal: 24,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  circle: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

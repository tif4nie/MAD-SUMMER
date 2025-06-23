import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Pic from '../../../assets/pic.svg';
import {Button, Gap} from '../../atoms';

const Header = ({
  text1 = 'Hi, Jane Doe',
  text2 = 'Have you track your money today?',
}) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.text1}>{text1}</Text>
          <Text style={styles.text2}>{text2}</Text>
        </View>
        <Pic style={styles.pic} />
      </View>

      <View style={styles.contentContainer}>
        <Gap height={24} />

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Your Balance</Text>
          <Text style={styles.balanceAmount}>Rp. 10.000.000</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.rowBetween}>
          <Text style={styles.rowText}>Cash on Hand</Text>
          <Text style={styles.rowText}>Rp. 4.000.000</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.rowText}>Cash on Bank</Text>
          <Text style={styles.rowText}>Rp. 6.000.000</Text>
        </View>

        <Gap height={24} />
        <Text style={styles.transactionTitle}>Add Transaction</Text>
        <Gap height={12} />

        <Button text="Cash On Hand" />
        <Gap height={12} />
        <Button text="Cash On Bank" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24,
  },
  pic: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  text1: {
    color: '#020202',
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
  },
  text2: {
    color: '#8D92A3',
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
  balanceContainer: {
    marginTop: 16,
  },
  balanceTitle: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 4,
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#000000',
    marginVertical: 16,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 30,
  },
  rowText: {
    fontSize: 14,
    width: 180,
    height: 30,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '500',
    width: 152,
    height: 22,
  },
});

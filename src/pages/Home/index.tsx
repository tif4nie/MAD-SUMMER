import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

const Home = () => {
  return (
    <View style={styles.pageContainer}>
      <Header text="Hi, Jane Doe" />
      <View style={styles.contentContainer}>
        <Gap height={24} />

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Your Balance</Text>
          <Text style={styles.balanceAmount}>Rp. 10.000.000</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.rowBetween}>
          <Text>Cash on Hand</Text>
          <Text>Rp. 4.000.000</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text>Cash on Bank</Text>
          <Text>Rp. 6.000.000</Text>
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

export default Home;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24,
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
    fontFamily: 'Poppins',
    justifyContent: 'space-between',
    fontSize: 14,
    width: 215,
    height: 30,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '500',
    width: 152,
    height: 22,
  },
});

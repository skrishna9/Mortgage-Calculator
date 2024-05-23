import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import MortgageCalculator from './src/MortgageCalculator';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <MortgageCalculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default App;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Percent from 'react-native-vector-icons/MaterialCommunityIcons';


const MortgageCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [repaymentTime, setRepaymentTime] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateLoanAmount = () => {
    const loan = parseFloat(purchasePrice) - parseFloat(downPayment);
    setLoanAmount(loan);
  };

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(purchasePrice) - parseFloat(downPayment);
    const monthlyInterestRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(repaymentTime) * 12;
    const monthlyPayment = principal * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPayments) / (Math.pow((1 + monthlyInterestRate), numberOfPayments) - 1);
    setMonthlyPayment(monthlyPayment);
  };

  const handleCalculate = () => {
    if (purchasePrice && downPayment && repaymentTime && interestRate) {
      calculateLoanAmount();
      calculateMonthlyPayment();
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mortgage Calculator</Text>
      <View style={styles.inputGroup}>
        <Icon name="home-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Purchase Price"
          keyboardType="numeric"
          value={purchasePrice}
          onChangeText={setPurchasePrice}
        />
      </View>
      <View style={styles.inputGroup}>
        <Icon name="cash-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Down Payment"
          keyboardType="numeric"
          value={downPayment}
          onChangeText={setDownPayment}
        />
      </View>
      <View style={styles.inputGroup}>
        <Icon name="time-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Repayment Time (years)"
          keyboardType="numeric"
          value={repaymentTime}
          onChangeText={setRepaymentTime}
        />
      </View>
      <View style={styles.inputGroup}>
        <Percent name="percent-outline" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Interest Rate (%)"
          keyboardType="numeric"
          value={interestRate}
          onChangeText={setInterestRate}
        />
      </View>
      <View style={styles.button}>
        <Button title="Calculate" onPress={handleCalculate}   />
      </View>
      <View style={styles.resultCard} >
        <Text style={styles.result}>Loan Amount: NPR {loanAmount.toFixed(2)}</Text>
        <Text style={styles.result}>Monthly Payment: NPR {monthlyPayment.toFixed(2)}</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#EFEFEF',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#222',
    fontFamily: 'sans-serif', // Use a styled font
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
    color: '#555',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    color: '#333',
  },
  
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
   
  },

  resultCard: {
    backgroundColor: 'pink',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },


});

export default MortgageCalculator;

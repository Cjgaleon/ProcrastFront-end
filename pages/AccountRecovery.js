import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const AccountRecovery = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>


      <Text style={styles.title}>Forgot Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#F0F3F4"}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType='email-address'
      />
        <TouchableOpacity
            style={styles.buttonContainer}
            >
            <Text style={styles.buttonText}>Send Code</Text>
            </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        >
            <Text style={styles.linkText}>Back to Login</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#262626'
  },

  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },

  logo: {
    width: 100,
    height: 120
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#F0F3F4'
  },

  input: {
    height: 45,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    color: '#F0F3F4'
  },
  linkText: {
    color: '#F3BB5F',
    marginLeft: 170,
    marginTop: -10
  },
  
  buttonContainer: {
    width: '80%',
    backgroundColor: '#373636',
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    
 },

 buttonText: {
    color: '#F3BB5F', 
    padding: 10,
    fontSize: 17,
 },
});

export default AccountRecovery;
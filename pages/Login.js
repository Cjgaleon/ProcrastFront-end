import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, View } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login button pressed');
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ProcrastiCure</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#F0F3F4"}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"#F0F3F4"}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('AccountRecovery')}
      >
        <Text style={styles.linkText}>Can't Sign In?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <Text style={styles.Text}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#262626',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#F0F3F4',
  },

  input: {
    width: '80%',
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderColor: '#373636',
    color: '#F0F3F4',
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

  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },

  linkText: {
    color: '#F3BB5F',
    marginBottom: 20,
    marginTop: -12,
    marginLeft: 170,
  },

  link: {
    color: '#F3BB5F',
  },

  Text: {
    color: '#F0F3F4',
  },
});

export default Login;

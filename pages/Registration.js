import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Registration = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        placeholderTextColor={"#F0F3F4"}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        placeholderTextColor={"#F0F3F4"}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        placeholderTextColor={"#F0F3F4"}
      />

      <TouchableOpacity
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <Text style={styles.Text}>Already have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.link}>Login</Text>
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
    height: 45,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: '#F0F3F4'
  },

  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },

  Text: {
    color: '#F0F3F4',
  },

  link: {
    color: '#F3BB5F',
  },

  buttonContainer: {
    width: '80%',
    backgroundColor: '#373636',
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },

  buttonText: {
    color: '#F3BB5F', 
    padding: 10,
    fontSize: 17,
  },
});

export default Registration;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Home from './pages/Home';
import RegistrationPage from './pages/Registration';
import AccountRecovery from './pages/AccountRecovery';
import Stopwatch from './pages/Stopwatch';
import ToDoList from './pages/ToDoList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registration" component={RegistrationPage} />
        <Stack.Screen name="AccountRecovery" component={AccountRecovery} />
        <Stack.Screen name="Stopwatch" component={Stopwatch} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

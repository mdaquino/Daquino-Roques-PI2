import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import HomeMenu from './src/components/HomeMenu';

import { NavigationContainer } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

export default function App() {
    


  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="HomeMenu" component={HomeMenu}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

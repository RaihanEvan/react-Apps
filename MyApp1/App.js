/*import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
*/

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from "./src/screens/HomePage";
import ProfilePage from "./src/screens/ProfilePage";
import SemesterPage from './src/screens/SemesterPage';
import FacultyPage from './src/screens/FacultyPage';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={HomePage}></stack.Screen>
        <stack.Screen name="Profile" component={ProfilePage}></stack.Screen>
        <stack.Screen name="Semesters" component={SemesterPage}></stack.Screen>
        <stack.Screen name="Faculty List" component={FacultyPage}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
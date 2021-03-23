//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {CreateBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './Screens/BookTransactionScreen';



export default class App extends React.Component() {
  render (){
<AppContainer/> 
  }
}
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:HomeScreen},
  Search:{screen:SoicalScreen}
})
const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

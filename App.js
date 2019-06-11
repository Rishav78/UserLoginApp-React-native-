/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions, Button} from 'react-native';
// import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import dashBoard from './app/components/dashBoard/Index';
import Login from './app/components/Home/Index';
import navigator from './app/components/Navigation/navigation';


var x = createStackNavigator({
	Home: {
		screen:Login,
	},
	navigator: {
		screen: navigator,
	}
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})


export default createAppContainer(x)
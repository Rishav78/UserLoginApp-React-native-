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
import LoginSignin from './app/components/LoginSignin/Index';
import Signup from './app/components/Signup/Index';
var x = createStackNavigator({
	LoginSignin: {
		screen: LoginSignin
	},
	Home: {
		screen:Login,
	},
	navigator: {
		screen: navigator,
	},
	Signup:{
		screen: Signup,
	}
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})


export default createAppContainer(x)
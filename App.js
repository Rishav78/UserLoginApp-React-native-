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


var x = createStackNavigator({
  Home: Login,
  dashBoard
})


export default createAppContainer(x)
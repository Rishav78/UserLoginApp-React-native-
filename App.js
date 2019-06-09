/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './app/components/Home/Index';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import dashBoard from './app/components/dashBoard/Index';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});



var x = createStackNavigator({
  Home: Login,
  dashBoard: dashBoard
})

export default createAppContainer(x)
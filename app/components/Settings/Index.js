/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from '../Common/Header'

export default class Setting extends Component{
	render(){
		return(
			<View>
				<Header 
					header="Setting"
					navigation = {this.props.navigation}
				/>
				<Text>Settings</Text>
			</View>
		)
	}
}

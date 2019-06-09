import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import DashBoard from '../dashBoard/Index';
import Settings from '../Settings/Index';

const width = Dimensions.get('window').width

const DrawerConfig = {
  drawerWidth: width*0.8
}

var AppStack = createAppContainer(createDrawerNavigator({
  dashBoard: {screen: DashBoard},
  setting: {screen: Settings}

}, DrawerConfig))


export default class Navigate extends Component{
	render(){
		return(
			<View>
			<Text>Rishav</Text>
			 	<AppStack />
			</View>
		)
	}
}
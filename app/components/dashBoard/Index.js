import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';


export default class DashBoard extends Component{
	static navigationOptions = {
		   header: null
	}
	render(){
		return(
			<View>
				<Text>DashBoard</Text>
			</View>
		)
	}
}


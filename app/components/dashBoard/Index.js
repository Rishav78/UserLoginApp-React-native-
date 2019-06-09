import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class DashBoard extends Component{
	render(){
		return(
			<View style={style.container}>
				<Text style={style.text}> Welcome </Text>
			</View>
		)
	}
}

style = {
	container: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},

}
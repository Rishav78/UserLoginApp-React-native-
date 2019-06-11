import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';
import Header from '../Common/Header'

export default class DashBoard extends Component{
	static navigationOptions = {
		   header: null
	}
	render(){
		return(
			<View>
				<Header 
					header="DashBoard"
					navigation = {this.props.navigation}
				/>
				<Text>DashBoard</Text>
			</View>
		)
	}
}


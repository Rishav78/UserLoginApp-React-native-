import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default class Login extends Component{
	state = {
		userName: '',
		userPassword: ''
	}
	checkCredentials = ()=>{
		if(this.state.userName == 'Rishav' && this.state.userPassword=='Hacker_12'){
			this.props.navigation.navigate('dashBoard')
		}else{
			Alert.alert('Error','Something went Wrong',[{
				text: 'Okey'
			}])
		}
	}
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.text}>Login Form</Text>
				<TextInput style={styles.input} onChangeText={userName => this.setState({userName})} placeholder="username" />
				<TextInput style={styles.input} secureTextEntry={true} onChangeText={userPassword => this.setState({userPassword})} placeholder="password" />
				<Button title="Login" onPress={this.checkCredentials}/>
				<Text>{this.state.userName}</Text>
				<Text>{this.state.userPassword}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 25
	},
	input: {
		borderRadius: 4,
		borderWidth: 0.5,
		width: '100%',
		fontSize: 20,
		marginTop: 10,
		marginBottom: 10,
		paddingLeft: 10
	}
})
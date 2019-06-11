import React, {Component} from 'react';
import background from '../../Files/background.jpg';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Platform,
 		StyleSheet, 
 		Text, 
 		View, 
 		TextInput, 
 		Button, 
 		Alert, 
 		ImageBackground,
 		TouchableOpacity,
 		Dimensions
 	} from 'react-native';

const width = (Dimensions.get('window').width)*0.9

export default class Login extends Component{
	state = {
		userName: '',
		userPassword: ''
	}

	checkCredentials = ()=>{
		fetch('http://localhost:3000',{ method: 'POST', body: `{"userName": "${this.state.userName}", "userPassword": "${this.state.userPassword}"}`})
		.then(res=>{
			return res.text()
		})
		.then(res=>{
			if(res == '1'){
				this.props.navigation.navigate('dashBoard')
			}else{
				Alert.alert('Error','Something went Wrong',[{
					text: 'Okey'
				}])
			}
		})
	}
	render(){
		return(
			<ImageBackground source={background} style={styles.container}>
				<Text style={styles.text}>Login Form</Text>
				<View style={styles.inputContainer}>
					<Icon name={'user'} size={23} color={'#333'} style={styles.icon} />
					<TextInput style={styles.input} onChangeText={userName => this.setState({userName})} placeholder="Enter your username" />
				</View>
				<View style={styles.inputContainer}>
					<Icon name={'lock'} size={23} color={'#333'} style={styles.icon} />
					<TextInput style={styles.input} secureTextEntry={true} onChangeText={userPassword => this.setState({userPassword})} placeholder="password" />
				</View>
				<TouchableOpacity style={styles.login} onPress={this.checkCredentials}><Text style={styles.loginText}>Login</Text></TouchableOpacity>
				<Text>{this.state.userName}</Text>
				<Text>{this.state.userPassword}</Text>
			 </ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		width: null,
		height: null
	},
	text: {
		fontSize: 25,
		alignItems: 'center'
	},
	input: {
		borderRadius: 30,
		borderWidth: 0.5,
		fontSize: 20,
		padding: 12,
		paddingLeft: 50,
		width: width,
	},
	login: {
		backgroundColor: 'rgba(0,0,0,0.35)',
		width: width,
		justifyContent: 'center',
		padding: 15,
		borderRadius: 30,
		marginTop: 20
	},
	loginText: {
		textAlign: 'center',
		color: 'white'
	},
	inputContainer: {
		marginTop: 12,
	},
	icon: {
		position: 'absolute',
		top: 15,
		left: 18,
	}
})
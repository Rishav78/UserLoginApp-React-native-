import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
		Platform,
		StyleSheet,
		Text, 
		View, 
		TextInput, 
		Button, 
		Dimensions,
		ImageBackground,
		Image,
		TouchableOpacity,
		Alert
	} from 'react-native';

const width = (Dimensions.get('window').width)*0.85

export default class DashBoard extends Component{
	static navigationOptions = {
		   header: null
	}
	state = {
		Name: '',
		userName: '',
		userPassword: '',
		confirmPassword: ''
	}
	createUser = ()=>{
		if(this.state.Name && this.state.userPassword && this.state.userName && this.state.userPassword === this.state.confirmPassword){
			fetch('http://localhost:3000/signup',{
					 method: 'POST', 
					 header: { "Content-Type": "application/json" },
					 body: `{"Name": "${this.state.Name}","userName": "${this.state.userName}", "userPassword": "${this.state.userPassword}"}`
				}
			 )
			.then(res=>{
				return res.text()
			})
			.then((data)=>{
				if(data == '1'){
					this.props.navigation.navigate('Home')
				}else{
					Alert.alert('Error','Something went Wrong',[{
						text: 'Okey'
					}])
				}
			})
			.catch((err)=>{
				console.log(err)
			})
		}
	}
	render(){
		return(
			<ImageBackground source={require('../../Files/background.jpg')} style={styles.container}>

		        <View style={styles.imageConatiner}>
		          	<Image source={require('../../Files/react.png')} style={styles.image} />
		          	<Text style={{textAlign: 'center',color: 'rgba(0,0,0,0.35)',marginTop: 20,fontSize: 25,fontWeight: 'bold'}}> Sign up</Text>
		        </View>

		        <View style={styles.form}>

		        	<View style={styles.inputContainer}>
						<Icon name={'user'} size={23} color={'#333'} style={styles.icon} />
						<TextInput style={styles.input} onChangeText={Name => this.setState({Name})} placeholder="Name" />
					</View>

					<View style={styles.inputContainer}>
						<Icon name={'envelope'} size={21} color={'#333'} style={styles.icon} />
						<TextInput style={styles.input} onChangeText={userName => this.setState({userName})} placeholder="Email / Username" />
					</View>

					<View style={styles.inputContainer}>
						<Icon name={'lock'} size={23} color={'#333'} style={styles.icon} />
						<TextInput style={styles.input} secureTextEntry={true} onChangeText={userPassword => this.setState({userPassword})} placeholder="Enter password" />
					</View>

					<View style={styles.inputContainer}>
						<Icon name={'lock'} size={23} color={'#333'} style={styles.icon} />
						<TextInput style={styles.input} secureTextEntry={true} onChangeText={confirmPassword => this.setState({confirmPassword})} placeholder="Confirm password" />
					</View>

					<TouchableOpacity style={styles.login} onPress={()=>this.createUser()}>
						<Text style={styles.loginText}>Sign up</Text>
					</TouchableOpacity>
					<Text>{this.state.Name}</Text>
					<Text>{this.state.userName}</Text>
					<Text>{this.state.userPassword}</Text>
					<Text>{this.state.confirmPassword}</Text>
				</View>
			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	width: null,
    	height: null,
  	},
  	image:{
    	width: 100,
    	height: 100,
  	},
  	imageConatiner: {
    	flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center'
  	},
  	form:{
		flex:2,
		alignItems: 'center'
	},
	text: {
		fontSize: 40,
		alignItems: 'center',
		color: '#333',
		marginBottom: 30,
		fontWeight: 'bold'
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
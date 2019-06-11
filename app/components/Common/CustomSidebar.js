import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Platform,
	StyleSheet,
	Text, 
	View, 
	Button,
	TouchableOpacity,
	Image,
	ScrollView
} from 'react-native';

export default class SideBar extends Component{
	render(){
		return(
			<ScrollView>
				<View style={styles.user}>
					<View>
						<Image style={styles.image} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
					</View>
					<View style={{padding: 10}}>
						<Text style={styles.name}>Rishav</Text>
						<Text style={styles.userName}>Rishav</Text>
					</View>
				</View>

				<TouchableOpacity style={styles.container} onPress={()=>this.props.navigation.navigate('dashBoard')}>
					<Icon name={'tachometer'} size={23} style={styles.icon} /><Text style={styles.text}>DashBoard</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.container} onPress={()=>this.props.navigation.navigate('Setting')}>
					<Icon name={'cogs'} size={23} style={styles.icon} />
					<Text style={styles.text}>Setting</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.container} onPress={()=>this.props.navigation.navigate('Setting')}>
					<Icon name={'sign-out'} size={23} style={styles.icon} />
					<Text style={styles.text}>Log out</Text>
				</TouchableOpacity>
			</ScrollView>
		)
	}
}

var styles = StyleSheet.create({
	user:{
		display: 'flex',
		flexDirection: 'row',
		padding: 20,
		borderBottomColor: 'rgba(0,0,0,0.1)',
    	borderBottomWidth: 1,
	},
	image:{
		width: 70,
		height: 70,
		borderRadius: 35,
		marginLeft: 8
	},
	name:{
		fontSize: 20,
		color: '#333'
	},
	userName:{
		fontSize: 12,
		color: 'rgba(0,0,0,0.5)'
	},
	container:{
		padding: 15,
		paddingLeft: 25,
		display: 'flex',
		flexDirection: 'row',
		borderBottomColor: 'rgba(0,0,0,0.1)',
    	borderBottomWidth: 1,
	},
	text:{
		fontSize: 20,
		color: '#333'
	},
	icon:{
		marginRight: 12
	}
})
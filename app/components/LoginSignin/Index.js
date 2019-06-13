import React, {Component} from 'react';
import {Icon} from 'native-base';
import {Platform,
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Alert,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    Button
  } from 'react-native';

const width = (Dimensions.get('window').width)*0.85

export default class Login extends Component{
  state = {
    loginBackground: 'rgba(0,0,0,0.35)'
  }

  render(){
    return(
      <ImageBackground source={require('../../Files/background.jpg')} style={styles.container}>
        <View style={styles.imageConatiner}>
          <Image source={require('../../Files/react.png')} style={styles.image} />
          <Text style={{textAlign: 'center',color: 'rgba(0,0,0,0.35)',marginTop: 20,fontSize: 25,fontWeight: 'bold'}}> Welcome Lets Begin </Text>
        </View>
        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.login} onPress={()=>this.props.navigation.navigate('Home')}>
            <Text style={{textAlign: 'center',fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.signup}>
            <Text style={{textAlign: 'center'}}>Sign up</Text>
          </TouchableOpacity>

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
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  login: {
    backgroundColor: 'transparent',
    padding: 15,
    width: width,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
  },
  signup: {
    backgroundColor: 'white',
    padding: 15,
    width: width,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
    color: '#333',
    marginTop: 12
  }
})
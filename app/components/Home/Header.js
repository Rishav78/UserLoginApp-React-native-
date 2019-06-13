import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import  {Text} from 'react-native';
import {
  StyleSheet,
  TouchableOpacity
  } from 'react-native'

export default class HeaderTitleExample extends Component {
  render() {
    return (
        <Header style={{backgroundColor: 'tranparent',borderWidth:0,boxShadow: 'none'}}>
          <Right>
            <TouchableOpacity style={{display: 'flex',flexDirection: 'row',justifyContent:'center',alignItems: 'center'}}>
              <Text style={styles.signup}> Signup </Text>
              <Icon name="arrow-right" size={20} color={'#333'} />
            </TouchableOpacity>
          </Right>
        </Header>
    );
  }
}


var styles = StyleSheet.create({
  signup: {
    fontSize: 20,
    color:'#333'
  }

})


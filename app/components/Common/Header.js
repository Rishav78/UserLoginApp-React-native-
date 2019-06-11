import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  StyleSheet,
  TouchableOpacity
  } from 'react-native'

export default class HeaderTitleExample extends Component {
  render() {
    return (
        <Header>
          <Left style={styles.left}>
            <TouchableOpacity onPress={()=> this.props.navigation.toggleDrawer()}>
              <Icon name={'bars'} size={23} color={'#333'} />
            </TouchableOpacity>
          </Left>
          <Body>
              <Title>{this.props.header}</Title>
          </Body>
        </Header>
    );
  }
}


var styles = StyleSheet.create({
  left: {
    width: 10
  }
})


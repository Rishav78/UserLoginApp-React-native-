import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import DashBoard from '../dashBoard/Index';
import Setting from '../Settings/Index';
import SideBar from '../Common/CustomSidebar'
const width = Dimensions.get('window').width

const DrawerConfig = {
  drawerWidth: width*0.8,
  contentComponent: SideBar
}

export default createAppContainer(createDrawerNavigator({
  dashBoard: {screen: DashBoard},
  Setting: {screen: Setting}

}, DrawerConfig))

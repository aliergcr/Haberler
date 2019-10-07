import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../HomeScreen'
import DrawerContent from './DrawerContent'

const DrawerNavigator = createDrawerNavigator({
    Home: { screen: HomeScreen }
    
  },
  {
    initialRouteName: Home,
    contentComponent: DrawerContent,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
    
  })
  
  const Home= createAppContainer(DrawerNavigator)

  export default class DrawerComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      return (
        <Home/>
      );
    }
  }
  
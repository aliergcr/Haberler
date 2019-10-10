import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../HomeScreen'
import DrawerContent from './DrawerContent'
import NewsList from '../NewsList'
<<<<<<< HEAD
<<<<<<< HEAD
import NewsView from '../NewsView'

const DrawerNavigator = createDrawerNavigator({
    Home: { screen: HomeScreen },
    NewsList: {screen: NewsList},
    NewsView:  {screen: NewsView}    
=======

const DrawerNavigator = createDrawerNavigator({
    Home: { screen: HomeScreen },
    NewsList: {screen: NewsList}
    
>>>>>>> parent of 5950e25... WEBVİEW eklendi
=======

const DrawerNavigator = createDrawerNavigator({
    Home: { screen: HomeScreen },
    NewsList: {screen: NewsList}
    
>>>>>>> parent of 5950e25... WEBVİEW eklendi
  },
  {
    initialRouteName: HomeDrawer,
    contentComponent: DrawerContent,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
    
  })
  
  const HomeDrawer= createAppContainer(DrawerNavigator)

  export default class DrawerComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      return (
        <HomeDrawer/>
      );
    }
  }
  
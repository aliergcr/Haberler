import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DrawerContent from './DrawerComponents/DrawerContent'
import NewsWebView from '../NewsWebView'
import World from '../NewsCategories/World'
import TopHeadlines from '../NewsCategories/TopHeadlines'
import Technology from '../NewsCategories/Technology'
import Magazine from '../NewsCategories/Magazine'
import Sports from '../NewsCategories/Sports'


export const WorldStackNavigator = createStackNavigator(
    {
        World: {screen: World},
        NewsWebView: { screen: NewsWebView }
    },
    {
        initialRouteName: 'World',
    }
)

export const TopHeadlinesStackNavigator = createStackNavigator(
    {
        TopHeadlines: {screen: TopHeadlines},
        NewsWebView: { screen: NewsWebView }
    },
    {
        initialRouteName: 'TopHeadlines',
    }
)

export const SportsStackNavigator = createStackNavigator(
    {
        Sports: {screen: Sports},
        NewsWebView: { screen: NewsWebView }
    },
    {
        initialRouteName: 'Sports',
    }
)

export const TechnologyStackNavigator = createStackNavigator(
    {
        Technology: {screen: Technology},
        NewsWebView: { screen: NewsWebView }
    },
    {
        initialRouteName: 'Technology',
    }
)

export const MagazineStackNavigator = createStackNavigator(
    {
        Magazine: {screen: Magazine},
        NewsWebView: { screen: NewsWebView }
    },
    {
        initialRouteName: 'Magazine',
    }
)

export const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TopHeadlinesStackNavigator,
        navigationOptions: {
                drawerLabel: 'Son Dakikaaa'
        }
    },
    World: {
        screen: WorldStackNavigator,
        navigationOptions: {
                drawerLabel: 'Dünyadan'
        }
    },
    Sports: {
        screen: SportsStackNavigator,
        navigationOptions: {
                drawerLabel: 'Spor'
        }
    },
    Technology: {
        screen: TechnologyStackNavigator,
        navigationOptions: {
                drawerLabel: 'Teknoloji'
        }
    },
    Magazine: {
        screen: MagazineStackNavigator,
        navigationOptions: {
                drawerLabel: 'Magazin'
        }
    },
    
},
    {
        initialRouteName: 'Home',
        contentComponent: DrawerContent,
        drawerPosition: 'left',
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    })

export const HomeDrawer = createAppContainer(DrawerNavigator)



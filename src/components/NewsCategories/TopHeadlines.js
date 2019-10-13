import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import NewsList from '../NewsList'

export default class TopHeadlines extends Component {
    static navigationOptions= ({navigation})=>{
   
        return{
          headerLeft: (
            <TouchableOpacity style={{paddingLeft: 10}} onPress={() => navigation.openDrawer()}>
              <Icon style={{color: '#fcf9ec'}}   name='menu' />
            </TouchableOpacity>
          ),
          title: 'Son Dakika',
          headerStyle: {
            backgroundColor: '#801336',
          },
          headerTitleStyle: {color: "#fcf9ec"},
        }
      }    
  render() {
    return (
        <NewsList category= 'TopHeadlines' navigation={this.props.navigation} link= 'https://www.haberturk.com/rss/manset.xml' />
    );
  }
}

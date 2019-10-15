import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import NewsList from '../NewsList'

export default class Cars extends Component {
    static navigationOptions= ({navigation})=>{
   
        return{
          headerLeft: (
            <TouchableOpacity style={{paddingLeft: 10}} onPress={() => navigation.openDrawer()}>
              <Icon style={{color: '#fcf9ec'}}   name='menu' />
            </TouchableOpacity>
          ),
          title: 'Otomobil Haberleri',
          headerStyle: {
            backgroundColor: '#801336',
          },
          headerTitleStyle: {color: "#fcf9ec"},
        }
      }    
  render() {
    return (
        <NewsList category= 'Otomobil' navigation={this.props.navigation}  />
    );
  }
}

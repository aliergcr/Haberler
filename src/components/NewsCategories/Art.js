import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import NewsList from '../NewsList'

export default class Art extends Component {
    static navigationOptions= ({navigation})=>{
   
        return{
          headerLeft: (
            <TouchableOpacity style={{paddingLeft: 10}} onPress={() => navigation.openDrawer()}>
              <Icon style={{color: '#fcf9ec'}}   name='menu' />
            </TouchableOpacity>
          ),
          title: 'Kültür-Sanat Haberleri',
          headerStyle: {
            backgroundColor: '#801336',
          },
          headerTitleStyle: {color: "#fcf9ec"},
        }
      }    
  render() {
    return (
        <NewsList category= 'Kültür-Sanat' navigation={this.props.navigation}  />
    );
  }
}

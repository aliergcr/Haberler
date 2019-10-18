import React, { Component } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'

import NewsList from '../NewsList'

export default class Art extends Component {
    static navigationOptions= ({navigation})=>{
   
        return{
          headerLeft: (
            <TouchableOpacity style={{paddingLeft: 10}} onPress={() => navigation.openDrawer()}>
              <Icon style={{ color: '#fcf9ec', marginLeft: 20}}   name='menu' />
            </TouchableOpacity>
          ),
          title: 'Kültür-Sanat Haberleri',
          headerStyle: {
            backgroundColor: '#4b134f',
          },
          headerTitleStyle: {color: "#fcf9ec", fontWeight: 'bold', paddingLeft: 20},
        }
      }    
  render() {
    return (
      <LinearGradient 
      colors={['#79616f', '#d87f81']}>
        <StatusBar backgroundColor="#4b134f" barStyle="light-content" />
        <NewsList category='Kültür-Sanat' navigation={this.props.navigation}/>
      </LinearGradient>
    );
  }
}

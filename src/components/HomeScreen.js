import React, { Component } from 'react';
import { Container, Icon } from 'native-base';

import HeaderComponent from './common/HeaderComponent'
import Category from './Category'

export default class HomeScreen extends Component {
    static navigationOptions= {
      title: 'Son Dakika',
        drawerIcon: (
            <Icon name='home'/>
        )
    }
  render() {
    return (
      <Container>
          <HeaderComponent navigation={this.props.navigation} name='menu' />
        <Category />
      </Container>
    )
  }
};
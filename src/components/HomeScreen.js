import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Card, Header, Left, Body, Right, Title, Button, Icon, Content } from 'native-base';

import HeaderComponent from './common/HeaderComponent'
import Category from './Category'

export default class HomeScreen extends Component {
    static navigationOptions= {
        drawerIcon: (
            <Icon name='home'/>
        )
    }
  render() {
    return (
      <Container>
          <HeaderComponent navigation={this.props.navigation} />
        <Category />
      </Container>
    )
  }
};
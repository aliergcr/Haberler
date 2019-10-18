import React, { Component } from 'react';
import { TouchableOpacity, StatusBar,SafeAreaView } from 'react-native';
import { Icon } from 'native-base';

import NewsList from '../NewsList'

export default class World extends Component {
  static navigationOptions = ({ navigation }) => {

    return {
      headerLeft: (
        <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()}>
          <Icon style={{ color: '#fcf9ec', marginLeft: 20 }} name='menu' />
        </TouchableOpacity>
      ),
      title: 'Dünyadan Haberler',
      headerStyle: {
        backgroundColor: '#0A5373',
      },
      headerTitleStyle: { color: "#fcf9ec", fontWeight: 'bold', paddingLeft: 20 },
    }
  }
  render() {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor="#0A5373" barStyle="light-content" />
        <NewsList category='Dünya' navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

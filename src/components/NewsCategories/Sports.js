import React, { Component } from 'react';
import { TouchableOpacity, StatusBar } from 'react-native';
import { Icon } from 'native-base';

import NewsList from '../NewsList'

export default class Sports extends Component {
  componentDidMount(){
    StatusBar.setBackgroundColor('#0A5373')
  }

  static navigationOptions = ({ navigation }) => {

    return {
      headerLeft: (
        <TouchableOpacity style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()}>
          <Icon style={{ color: '#fcf9ec', marginLeft: 20 }} name='menu' />
        </TouchableOpacity>
      ),
      title: 'Spor Haberleri',
      headerStyle: {
        backgroundColor: '#0A5373',
      },
      headerTitleStyle: { color: "#fcf9ec", fontWeight: 'bold', paddingLeft: 20 },
    }
  }
  render() {
    return (
        <NewsList category='Spor' navigation={this.props.navigation} />
    );
  }
}

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {Icon, Container} from 'native-base';
import HeaderComponent from './common/HeaderComponent'

export default class NewsWebView extends Component {
  
  render() {
      const {url} = this.props.navigation.state.params
      
    return (
      <Container>
        <HeaderComponent name='arrow-back' title='Haber İçeriği' navigation={this.props.navigation} />
        <WebView
        source={{ uri: url }}
        style={{  }}
      />
      </Container>
    );
  }
}
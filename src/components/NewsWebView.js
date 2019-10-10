import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import {Container} from 'native-base';
import HeaderComponent from './common/HeaderComponent'

export default class NewsWebView extends Component {
  
  render() {
      const {url} = this.props.navigation.state.params
      
    return (
      <Container>
        <HeaderComponent name='arrow-back' title='Haber İçeriği' navigation={this.props.navigation} />
        <WebView
        startInLoadingState={true}
        source={{ uri: url }}
        renderLoading={() => {
          return (
            <ActivityIndicator
            style={{ marginTop:20, alignItems: 'center'}}
            size="large"
            color= '#000'
          />
          )
        }}
        
      />
      
      </Container>
    );
  }
}
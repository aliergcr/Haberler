import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default class NewsWebView extends Component {
  render() {
      const {url} = this.props.navigation.state.params
      
    return (
      <WebView
        source={{ uri: url }}
        style={{  }}
      />
    );
  }
}
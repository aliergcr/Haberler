import React, { Component } from 'react';
import { SafeAreaView,  TouchableHighlight, Linking } from 'react-native';
import {Icon} from 'native-base'
import HeaderComponent from './common/HeaderComponent'
import WebViewComp from './common/WebViewComp'
import { WebView } from 'react-native-webview';


export default class NewsView extends Component {
  // static navigationOptions = {
  //   header: ({navigate}) => {
  //     left: (
  //       <TouchableHighlight onPress={() => navigate.goBack()}>
  //         <Icon name= 'arrow-round-back' />
  //       </TouchableHighlight>
  //     )}
  // }

  render() {
    console.log('newsView')
    const { url } = this.props.navigation.state.params
    console.log(url)
    return (
      <SafeAreaView>
        {Linking.openURL(url)}
      </SafeAreaView>
    );
  }
}
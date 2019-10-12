import React, { Component } from 'react'
import { ActivityIndicator, View } from 'react-native'
import {WebView} from 'react-native-webview'
import { Container } from 'native-base'
import HeaderComponent from './common/HeaderComponent'

export default class NewsWebView extends Component {

  render() {
    const { url } = this.props.navigation.state.params;

    return (
      <Container>
        <HeaderComponent name='arrow-back' title='Haber İçeriği' navigation={this.props.navigation} />
         <WebView
          startInLoadingState={true}
          source={{ uri: url }}
          renderLoading={() => {
            return (
              <View style={{
                width: '100%',
                height: '100%',
                marginTop:20
              }}>
                <ActivityIndicator size="large" color= '#5edfff' />
                </View>
            )
          }}
        />
      </Container>
    );
  }
}
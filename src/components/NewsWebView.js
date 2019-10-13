import React, { Component } from 'react'
import { ActivityIndicator, View, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview'
import { Container, Icon } from 'native-base'

export default class NewsWebView extends Component {
  static navigationOptions = {
    title: 'Haber İçeriği',
    headerStyle: {
      backgroundColor: '#801336',
    },
    headerTitleStyle: { color: "#fcf9ec"},
    headerTintColor: '#fcf9ec'
    
  }

render() {
  const { url } = this.props.navigation.state.params;

  return (
    <Container>
      <WebView
        startInLoadingState={true}
        source={{ uri: url }}
        renderLoading={() => {
          return (
            <View style={{
              width: '100%',
              height: '100%',
              marginTop: 20
            }}>
              <ActivityIndicator size="large" color='#5edfff' />
            </View>
          )
        }}
      />
    </Container>
  );
}
}
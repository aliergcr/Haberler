import React, { Component } from 'react'
import { ActivityIndicator, View, Share, StatusBar } from 'react-native'
import { WebView } from 'react-native-webview'
import { Container, Icon, Fab } from 'native-base'

export default class NewsWebView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  static navigationOptions =  {
    title: 'Haber İçeriği',
    headerStyle: {
      backgroundColor: '#0A5373',
    },
    headerTitleStyle: { color: "#fcf9ec", fontWeight: 'bold' },
    headerTintColor: '#fcf9ec'
  }

  render() {
    const { url } = this.props.navigation.state.params;
    return (
      <Container>
        <StatusBar backgroundColor="#0A5373" barStyle="light-content" />
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
                <ActivityIndicator size="large" color='#0A5373' />
              </View>
            )
          }}
        />
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => {
            Share.share(
              {
                message: url

              }).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));
          }}>
          <Icon name="share" />
        </Fab>
      </Container>
    );
  }
}
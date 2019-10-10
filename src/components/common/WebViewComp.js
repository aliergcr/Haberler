import React from 'react'
import { SafeAreaView, View, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview';

class WebViewComp extends React.Component {
    render() {
        const { url } = this.props
        console.log('WebViewComp')
        console.log(url)
        return (
            <SafeAreaView>
                <WebView
                    source={{ uri: 'https://facebook.github.io/react-native/' }}
                    //style={{ flex: 1 }}
                // startInLoadingState={true}
                // renderLoading={()=>{
                //     return (
                //         <View>
                //           <ActivityIndicator style={{ flex: 1 }}
                //             size='large'
                //           />
                //         </View>
                //     )}}
                />
            </SafeAreaView>
        )
    }
}

export default WebViewComp;

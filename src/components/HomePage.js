import React, { Component } from 'react'
import { View, StatusBar, Image, StyleSheet } from 'react-native'

export default class HomePage extends Component {
    componentDidMount() {
        StatusBar.setBackgroundColor('#0A5373')
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0A5373' }}>
                <Image
                    style={styles.drawerImage}
                    source={require('../../assets/DrawerIcons/logo.png')}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerImage: {

    }
})
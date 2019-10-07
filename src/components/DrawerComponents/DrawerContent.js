import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'
import { Container, Header, Content, Body, Right, Title, Button, Icon } from 'native-base';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class DrawerContent extends Component {
    render() {
        return (
            <Container >
                <Header style={{height: 200}}>
                    <Body >
                        <Image
                            style={styles.drawerImage}
                            source={require('../../../assets/DrawerIcons/logo.png')}
                        />
                    </Body>
                </Header>
                <Content>
                    <DrawerItems {...this.props} />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75

    }
})

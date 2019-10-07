import React from 'react'
import { Container, Card, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';

const HeaderComponent = ({ navigation }) => {
    return (
        <Header >
            <Left>
                <Button transparent onPress={() => navigation.openDrawer()}>
                    <Icon name='home' />
                </Button>
            </Left>
            <Body>
                <Title>Son Dakika</Title>
            </Body>
            <Right />
        </Header>
    )
}

export default HeaderComponent

import React from 'react'
import { Container, Card, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';

const HeaderComponent = ({ navigation, name, title }) => {
    return (
        <Header >
            <Left>
                <Button transparent onPress={() => {
                    if(name==='menu'){
                        navigation.openDrawer()
                    }else if(name==='arrow-back'){
                        navigation.goBack()
                    }
                }}>
                    <Icon name={name} />
                </Button>
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right />
        </Header>
    )
}

export default HeaderComponent

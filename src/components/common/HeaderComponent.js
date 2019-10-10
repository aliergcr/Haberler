import React from 'react'
import { Header, Left, Body, Right, Title } from 'native-base';
import ButtonComponent from './ButtonComponent';

const HeaderComponent = ({navigation, name }) => {
    
    return (
        <Header >
            <Left>
                <ButtonComponent transparent name={name} navigation= {navigation} />  
            </Left>
            <Body>
                <Title>Son Dakika</Title>
            </Body>
            <Right />
        </Header>
    )
}

export default HeaderComponent

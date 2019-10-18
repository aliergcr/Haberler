import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Body, Card, CardItem, Text, Left, Right, Title, Footer } from 'native-base';

export default class DrawerContent extends Component {

    render() {
        return (
            <Container>
                <Header style={{ height: 100, backgroundColor: '#0A5373' }}>
                    <Body style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            style={styles.drawerImage}
                            source={require('../../../../assets/DrawerIcons/logo.png')}
                        />
                    </Body>
                </Header>
                <Header style={{ backgroundColor: '#303e57' }}>
                    <Body>
                        <Title style={{ color: '#ffffff' }} >Haber Kategorileri</Title>
                    </Body>
                </Header>
                <Content>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >
                        <Card  >
                            <CardItem style={{ backgroundColor: '#0A5373' }} >
                                <Body>
                                    <Text style={{color: '#ffffff'}}>
                                        Son Dakika
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('World')} >
                        <Card>
                        <CardItem style={{ backgroundColor: '#0A5373' }} >
                                <Body>
                                    <Text style={{color: '#ffffff'}}>
                                        Dünyadan Haberler
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Sports')} >
                        <Card>
                        <CardItem style={{ backgroundColor: '#0A5373' }} >
                                <Body>
                                    <Text style={{color: '#ffffff'}}>
                                        Spor Haberleri
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Technology')} >
                        <Card>
                        <CardItem style={{ backgroundColor: '#0A5373' }} >
                                <Body>
                                    <Text style={{color: '#ffffff'}}>
                                        Teknoloji Haberleri
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Magazine')} >
                        <Card>
                        <CardItem style={{ backgroundColor: '#0A5373' }} >
                                <Body>
                                    <Text style={{color: '#ffffff'}}>
                                        Magazin Haberleri
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Art')} >
                        <Card>
                        <CardItem style={{ backgroundColor: '#0A5373' }} >
                                <Body>
                                    <Text style={{color: '#ffffff'}}>
                                        Kültür-Sanat Haberleri
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Cars')} >
                        <Card>
                        <CardItem style={{ backgroundColor: '#0A5373' }} >
                                <Body>
                                    <Text style={{color: '#ffffff'}}>
                                        Otomobil Haberleri
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Health')} >
                        <Card>
                        <CardItem style={{ backgroundColor: '#0A5373' }} >
                                <Body>
                                    <Text style={{color: '#ffffff'}}>
                                        Sağlık Haberleri
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                </Content>
                <Footer style={{ height: 30, backgroundColor: '#303e57', paddingLeft: 10 }}>
                    <Body>
                        <Text style={{ color: 'white' }}>
                            OrsaTramola Mobil APPS
                        </Text>
                    </Body>
                </Footer>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    drawerImage: {
        marginTop:40,
        height: 150,
        width: 150,
    }
})

import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Body, Card, CardItem, Text, Left, Right, Title, Footer } from 'native-base';

export default class DrawerContent extends Component {

    render() {
        return (
            <Container>
                <Header style={{ height: 150, backgroundColor: '#522160' }}>
                    <Body style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            style={styles.drawerImage}
                            source={require('../../../../assets/DrawerIcons/logo.png')}
                        />
                    </Body>
                </Header>
                <Header style={{ backgroundColor: '#534666' }}>
                    <Body>
                        <Title style={{ color: 'white' }} >Haber Kategorileri</Title>
                    </Body>
                </Header>
                <Content>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} >
                        <Card >
                            <CardItem >
                                <Body>
                                    <Text>
                                        Son Dakika
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('World')} >
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        Dünyadan Haberler
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Sports')} >
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        Spor Haberleri
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Technology')} >
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        Teknoloji Haberleri
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Magazine')} >
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        Magazin Haberleri
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Art')} >
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        Kültür-Sanat Haberleri
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Cars')} >
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        Otomobil Haberleri
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Health')} >
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        Sağlık Haberleri
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>

                </Content>
                <Footer style={{ height: 30, backgroundColor: '#534666', paddingLeft: 10 }}>
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
        height: 150,
        width: 150,
    }
})

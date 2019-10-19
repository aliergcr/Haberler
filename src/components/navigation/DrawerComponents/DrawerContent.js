import React, { Component } from 'react'
import { Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Container, Header, Content, Body, Card, CardItem, Text, Left, Right, Title, Footer } from 'native-base';

export default class DrawerContent extends Component {
    componentDidMount(){
        StatusBar.setBackgroundColor('#0A5373')
      }

    render() {
        return (
            <Container androidStatusBarColor="#0A5373" >
                <Header androidStatusBarColor="#0A5373"  style={{ height: 100, backgroundColor: '#0A5373' }}>
                    <Body style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            style={styles.drawerImage}
                            source={require('../../../../assets/DrawerIcons/logo.png')}
                        />
                    </Body>
                </Header>
                <Header androidStatusBarColor="#0A5373" style={{ backgroundColor: '#303e57' }}>
                    <Body style={{paddingLeft: 10 }}>
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
                <Footer style={{ height: 30, backgroundColor: '#303e57' }}>
                    <Body style={{paddingLeft:20}}>
                        <Text style={{ fontSize: 12, color: 'white' }}>
                            OrsaTramola Mobile APPS
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

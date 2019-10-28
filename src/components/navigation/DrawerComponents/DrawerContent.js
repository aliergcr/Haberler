import React, { Component } from 'react'
import { Image, StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Body, Text, Title, Footer, List, ListItem } from 'native-base';

const datas = [
    {
        name: "Son Dakika",
        route: "Home",
    },
    {
        name: "Dünyadan Haberler",
        route: "World",
    },
    {
        name: "Spor Haberleri",
        route: "Sports",
    },
    {
        name: "Teknoloji Haberleri",
        route: "Technology",
    },
    {
        name: "Magazin Haberleri",
        route: "Magazine",
    },
    {
        name: "Kültür-Sanat Haberleri",
        route: "Art",
    },
    {
        name: "Otomobil Haberleri",
        route: "Cars",
    }
]
export default class DrawerContent extends Component {

    componentDidMount() {
        StatusBar.setBackgroundColor('#0A5373')
    }

    render() {
        return (
            <Container androidStatusBarColor="#0A5373" >
                <Header androidStatusBarColor="#0A5373" style={{ height: 100, backgroundColor: '#0A5373' }}>
                    <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={styles.drawerImage}
                            source={require('../../../../assets/DrawerIcons/logo.png')}
                        />
                    </Body>
                </Header>
                <Header androidStatusBarColor="#0A5373" style={{ marginBottom: 5, backgroundColor: '#303e57' }}>
                    <Body style={{ paddingLeft: 10 }}>
                        <Title style={{ color: '#ffffff' }} >Haber Kategorileri</Title>
                    </Body>
                </Header>
                <List
                    dataArray={datas}
                    keyExtractor={data => data.name}
                    renderRow={data =>
                        <ListItem
                            style={{
                                margin: 5,
                                marginLeft: 5,
                                paddingLeft: 20,
                                backgroundColor: '#0A5373',
                                borderRadius: 10
                            }}
                            button
                            onPress={() => this.props.navigation.navigate(data.route)}
                        >
                            <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>
                                {data.name}
                            </Text>
                        </ListItem>
                    }
                />
                <Footer style={{ height: 30, backgroundColor: '#303e57' }}>
                    <Body style={{ paddingLeft: 20 }}>
                        <Text style={{ fontSize: 12, color: 'white' }}>
                            OrsaTramola Mobile APPS
                        </Text>
                    </Body>
                </Footer>
            </Container >
        )
    }
}

const styles = StyleSheet.create({
    drawerImage: {
        marginTop: 40,
        height: 150,
        width: 150,
    }
})

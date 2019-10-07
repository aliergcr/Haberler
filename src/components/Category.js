import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text, Button, List, ListItem } from 'native-base';
import { ListView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    name: 'Gündem'
                },
                {
                    name: 'Dünyadan'
                },
                {
                    name: 'Ekonomi'

                },
                {
                    name: 'Spor'
                },
                {
                    name: 'Seyahat'

                },
                {
                    name: 'Sağlık'
                },
                {
                    name: 'Teknoloji'

                },
                {
                    name: 'Politika'
                }

            ]
        };
    }

    renderItem({ item }) {
        return (
            <List>
                <ListItem>
                    <Button transparent onPress={()=>console.log(item.name)}>
                        <Text>{item.name}</Text>
                    </Button>
                </ListItem>
            </List>
        )
    }

    render() {
        return (

            <FlatList
                data={this.state.categories}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.name}
            />


        );
    }
}

import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text, Button } from 'native-base';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: {
                general: 'Gündem',
                world: 'Dünya',
                economy: 'Ekonomi',
                sport: 'Spor',
                travel: 'Seyahat',
                health: 'Sağlık',
                technology: 'Teknoloji',
                politics: 'Politika'
            }

        };
    }

    render() {
        return (
            <Container style={{marginTop: 10}}>
                <Content>
                <Button rounded style={{ width: 100, justifyContent: 'center' }}>
                    <Text>Selam</Text>
                </Button>
            </Content>
            </Container>
            );
        }
    }

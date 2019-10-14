import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class FetchNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [
                {
                    "title": "",
                    "url": "" , 
                  "pubDate": "", 
                  "thumbnail": "",
                  "author": "" ,
               }
            ]
            ,
            refreshing: true,

        };
    }

    NtvNews() {

        fetch('https://www.ntv.com.tr/gundem.rss')
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {

                rss.items.map((item) => console.log(item))
                this.setState({
                    news: rss,
                })
            });

    }




    render() {
        return (
            <View>
                <Text> FetchNews </Text>
            </View>
        );
    }
}

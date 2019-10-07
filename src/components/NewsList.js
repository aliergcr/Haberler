import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View, } from 'react-native';
import {  List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

const NewsList = ({navigation}) => {
  const [headlines, setHeadlines] = useState({});
  
  const category = 'technology'; 
  const country = 'tr';
  const API_KEY = 'bcad8306d2a54c0cac8a5767463bf976';
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;

  console.log(navigation)
  
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    (await fetch(url))
      .json()
      .then(res => setHeadlines(res))
  }

  renderItem = ({ item }) => {
    return (
      
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: item.urlToImage }} />
            </Left>
            <Body>
              <Text numberOfLines={2}>{item.title}</Text>
              <Text note numberOfLines={2}>{item.description}</Text>
              <View style={{ flexDirection: 'row', }}>
                <Text note >{item.source.name}</Text>
                <Text note >{item.publishedAt}</Text>
              </View>
            </Body>
            <Right>
              <Button transparent onPress={() => navigation.navigate('NewsWebView', {item: item})}>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        </List>
    )
  }
  console.log(headlines.articles)
  return (
    <SafeAreaView>
      <FlatList
        data={headlines.articles}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.title}
      />

    </SafeAreaView>
  );
};



export default NewsList;
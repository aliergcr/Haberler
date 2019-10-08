import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View, } from 'react-native';
import { NavigationEvents } from "react-navigation";
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import HeaderComponent from '../components/common/HeaderComponent'

const category = 'general';
const country = 'tr';
const API_KEY = 'bcad8306d2a54c0cac8a5767463bf976';
const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {}
    }
  }

 fetchData(){
    console.log('Yenilendi')
    fetch(url)
    .then((response) => response.json())
    .then(res => {this.setState({
        news: res
      })})
      
    
  }


  renderItem = ({ item }) => {
    console.log('renderItem')
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
            <Button transparent onPress={() => navigation.navigate('NewsWebView', { item: item })}>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
    )
    
  }

  
  render() {
    console.log('render')
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <NavigationEvents
          onWillFocus={() => {
            this.fetchData()
            
          }}
        />
        <HeaderComponent navigation={this.props.navigation} />
        <FlatList
          data={this.state.news.articles}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.title}
        />

      </SafeAreaView>
    );
  }

};



export default NewsList;
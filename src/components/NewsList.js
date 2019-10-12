import React from 'react';
import { SafeAreaView, FlatList, View, ActivityIndicator } from 'react-native';
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
      news: {},
      refreshing: true
    }
  }
  componentDidMount() {
    this.fetchNews()
  }

  fetchNews() {
    //console.log('Yenilendi')
    fetch(url)
      .then((response) => response.json())
      .then(news => {
        this.setState({
          news: news,
          refreshing: false
        })
      })
      .catch(() => this.setState({ refreshing: false }))
    //console.log(this.state.news)


  }


  renderItem = ({ item }) => {
    const { navigation } = this.props;

    //console.log('renderItem');
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
            <Button transparent onPress={() => navigation.navigate('NewsWebView', { url: item.url })}>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
    )
  }

  handleRefresh() {
    //console.log('handleRefresh');

    this.setState({
      refreshing: true,
    });
    this.fetchNews()


    //()=>this.forceUpdate()
  }

  isLoading() {
    if (this.state.refreshing) {
      return (
        <View style={{
          width: '100%',
          height: '100%',
          marginTop:20
        }}><ActivityIndicator size="large" color= '#5edfff' /></View>
      )
    } else {
      return (
        <FlatList
          data={this.state.news.articles}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.title}
          refreshing={this.state.refreshing}
          onRefresh={() => this.handleRefresh()}
        />
      )
    }
  }
    render() {
      //console.log('render')

      return (
        <SafeAreaView>
          <NavigationEvents
            onDidFocus={() => {
              this.forceUpdate()
              this.fetchNews()
            }}
          />
          <HeaderComponent name='menu' title='Gündem' navigation={this.props.navigation} />
          {this.isLoading()}
        </SafeAreaView>
      );
    }
  };

  export default NewsList;
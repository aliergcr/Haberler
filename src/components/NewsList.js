import React from 'react';
import { SafeAreaView, FlatList, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NavigationEvents } from "react-navigation";
import * as rssParser from 'react-native-rss-parser';

import ListItems from '../components/ListItems'

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {},
      refreshing: true,

    }
  }

  componentDidMount() {
    this.fetchNews()
    this.NtvNews()
  }

  NtvNews() {

    var convert = require('xml-js');
    var xml ='https://www.cnnturk.com/feed/rss/all/news'
      
    var result1 = convert.xml2json(xml, { compact: true, spaces: 4 });
    console.log(result1);

  };



  fetchNews() {
    const { link } = this.props
    fetch(link)
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        this.setState({
          news: rss,
          refreshing: false
        })
      });
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <ListItems navigation={navigation} item={item} />
    )
  }

  handleRefresh() {
    this.setState({
      refreshing: true,
    });
    this.fetchNews()
  }

  isLoading() {
    if (this.state.refreshing) {
      return (
        <View style={{
          width: '100%',
          height: '100%',
          marginTop: 20
        }}><ActivityIndicator size="large" color='#5edfff' /></View>
      )
    } else {
      return (
        <FlatList
          data={this.state.news.items}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.title}
          refreshing={this.state.refreshing}
          onRefresh={() => this.handleRefresh()}
        />
      )
    }
  }

  render() {
    return (
      <SafeAreaView>
        <NavigationEvents
          onDidFocus={() => {
            this.forceUpdate()
            this.fetchNews()
          }}
        />
        {this.isLoading()}
      </SafeAreaView>
    );
  }
};

export default NewsList;
import React from 'react';
import { SafeAreaView, StatusBar, FlatList, View, ActivityIndicator } from 'react-native';
import { NavigationEvents } from "react-navigation";
import * as rssParser from 'react-native-rss-parser';

import ListItems from '../components/ListItems'

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      links: [
        {
          "link": "https://www.haberturk.com/rss/manset.xml",
          "category": "Son Dakika",
          "author": "Habertürk"
        },
        {
          "link": "https://www.haberturk.com/rss/ekonomi.xml",
          "category": "Ekonomi",
          "author": "Habertürk"
        },
        {
          "link": "https://www.haberturk.com/rss/spor.xml",
          "category": "Spor",
          "author": "Habertürk"
        },
        {
          "link": "https://www.haberturk.com/rss/magazin.xml",
          "category": "Magazin",
          "author": "Habertürk"
        },
        {
          "link": "https://www.haberturk.com/rss/kategori/saglik.xml",
          "category": "Sağlık",
          "author": "Habertürk"
        },
        {
          "link": "https://www.haberturk.com/rss/kategori/kultur-sanat.xml",
          "category": "Kültür-Sanat",
          "author": "Habertürk"
        },
        {
          "link": "https://www.haberturk.com/rss/kategori/otomobil.xml",
          "category": "Otomobil",
          "author": "Habertürk"
        },
        {
          "link": "https://www.haberturk.com/rss/kategori/yazarlar.xml",
          "category": "Yazarlar",
          "author": "Habertürk"
        },
        {
          "link": "http://www.trt.net.tr/rss/gundem.rss",
          "category": "Son Dakika",
          "author": "TRT"
        },
        {
          "link": "http://www.trt.net.tr/rss/dunya.rss",
          "category": "Dünya",
          "author": "TRT"
        },
        {
          "link": "https://www.haberturk.com/rss/kategori/dunya.xml",
          "category": "Dünya",
          "author": "Habertürk"
        },
        {
          "link": "http://www.trt.net.tr/rss/spor.rss",
          "category": "Spor",
          "author": "TRT"
        },
        {
          "link": "http://www.trt.net.tr/rss/ekonomi.rss",
          "category": "Ekonomi",
          "author": "TRT"
        },
        {
          "link": "http://www.trt.net.tr/rss/kultursanat.rss",
          "category": "Kültür-Sanat",
          "author": "TRT"
        },
        {
          "link": "http://www.trt.net.tr/rss/saglik.rss",
          "category": "Sağlık",
          "author": "TRT"
        },
        {
          "link": "http://www.hurriyet.com.tr/rss/gundem",
          "category": "Son Dakika",
          "author": "Hürriyet"
        },
        {
          "link": "http://www.hurriyet.com.tr/rss/ekonomi",
          "category": "Ekonomi",
          "author": "Hürriyet"
        },
        {
          "link": "http://www.hurriyet.com.tr/rss/magazin",
          "category": "Magazin",
          "author": "Hürriyet"
        },
        {
          "link": "http://www.hurriyet.com.tr/rss/spor",
          "category": "Spor",
          "author": "Hürriyet"
        },
        {
          "link": "http://www.hurriyet.com.tr/rss/teknoloji",
          "category": "Teknoloji",
          "author": "Hürriyet"
        },
        {
          "link": "http://www.hurriyet.com.tr/rss/saglik",
          "category": "Sağlık",
          "author": "Hürriyet"
        },
        {
          "link": "http://www.hurriyet.com.tr/rss/yazarlar",
          "category": "Yazarlar",
          "author": "Hürriyet"
        },
        {
          "link": "http://www.cumhuriyet.com.tr/rss/son_dakika.xml",
          "category": "Son Dakika",
          "author": "Cumhuriyet"
        },
        {
          "link": "http://www.cumhuriyet.com.tr/rss/11.xml",
          "category": "Teknoloji",
          "author": "Cumhuriyet"
        },
        {
          "link": "http://www.cumhuriyet.com.tr/rss/5.xml",
          "category": "Dünya",
          "author": "Cumhuriyet"
        },
        {
          "link": "http://www.cumhuriyet.com.tr/rss/6.xml",
          "category": "Ekonomi",
          "author": "Cumhuriyet"
        },
        {
          "link": "http://www.cumhuriyet.com.tr/rss/17.xml",
          "category": "Otomobil",
          "author": "Cumhuriyet"
        },
        {
          "link": "http://www.cumhuriyet.com.tr/rss/7.xml",
          "category": "Kültür-Sanat",
          "author": "Cumhuriyet"
        },
        {
          "link": "http://www.cumhuriyet.com.tr/rss/12.xml",
          "category": "Sağlık",
          "author": "Cumhuriyet"
        },
        {
          "link": "http://www.cumhuriyet.com.tr/rss/9.xml",
          "category": "Spor",
          "author": "Cumhuriyet"
        },
        {
          "link": "http://www.cumhuriyet.com.tr/rss/2.xml",
          "category": "Yazarlar",
          "author": "Cumhuriyet"
        },
        {
          "link": "https://tr.sputniknews.com/export/rss2/archive/index.xml",
          "category": "Son Dakika",
          "author": "Sputnik Türkiye"
        },
        {
          "link": "https://www.fotomac.com.tr/rss/anasayfa.xml",
          "category": "Spor",
          "author": "Fotomaç"
        },
        {
          "link": "https://www.donanimhaber.com/rss/tum/",
          "category": "Teknoloji",
          "author": "Donanım Haber"
        }
      ],
      refreshing: true,
    }
  }

  componentDidMount() {
    this.fetchNews();
  }

 async fetchNews() {

     this.state.links.map((data) => {
      if (data.category === this.props.category) {
         fetch(data.link)
          .then((response) => response.text())
          .then((responseData) => rssParser.parse(responseData))
          .then((rss) => {
            let index = 0;
            rss.items.map((item) => {
              if (index !== 10) {
                index += 1;
                let state_data = {
                  "title": item.title,
                  "url": item.links[0].url,
                  "pubDate": item.published,
                  "thumbnail": item.enclosures[0].url,
                  "author": data.author,
                  "category": data.category
                }
                this.setState({
                  news: [...this.state.news, state_data]
                })
                this.setState({
                  refreshing: false,
                });
              } else {
                return;
              }

            });
          })
      }
    })
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
          data={this.state.news}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.url}
          refreshing={this.state.refreshing}
          onRefresh={() => this.handleRefresh()}
        />
      )
    }
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor="#801336" barStyle="light-content" />
        <NavigationEvents
          onDidFocus={() => {
            this.setState({
              refreshing: true,
            });
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
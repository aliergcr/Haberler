import React from 'react';
import { SafeAreaView, StatusBar, FlatList, View, ActivityIndicator } from 'react-native';
import { NavigationEvents } from "react-navigation";
import * as rssParser from 'react-native-rss-parser';
import moment from 'moment';
import 'moment/locale/tr';

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
        },
        {
          "link": "https://t24.com.tr/rss/haber/gundem",
          "category": "Son Dakika",
          "author": "T24"
        },
        {
          "link": "https://t24.com.tr/rss/haber/dunya",
          "category": "Dünya",
          "author": "T24"
        },
        {
          "link": "https://t24.com.tr/rss/haber/ekonomi",
          "category": "Ekonomi",
          "author": "T24"
        },
        {
          "link": "https://t24.com.tr/rss/haber/kultur-sanat",
          "category": "Kültür-Sanat",
          "author": "T24"
        },
        {
          "link": "https://t24.com.tr/rss/haber/bilim-teknoloji",
          "category": "Teknoloji",
          "author": "T24"
        },
        {
          "link": "https://t24.com.tr/rss/haber/saglik",
          "category": "Sağlık",
          "author": "T24"
        },
        {
          "link": "https://t24.com.tr/rss/yazarlar",
          "category": "Yazarlar",
          "author": "T24"
        }
      ],
      refreshing: true,
    }
  }

  componentDidMount() {
    
    this.fetchNews();
  }

  fetchNews() {
    
     this.state.links.map((data) => {
       
      if (this.props.category === data.category ) {
        //console.log(data)
         fetch(data.link)
          .then((response) => response.text())
          .then((responseData) => rssParser.parse(responseData))
          .then((rss) => {
            //console.log(rss.items)
            rss.items.map((item, index) => {
            //console.log(item)
              if (index< 10) {
                //console.log(index)
                let state_data = {
                  "title": item.title,
                  "url": item.links[0].url,
                  "pubDate": moment(item.published || moment.now()).fromNow(),
                  "thumbnail": item.enclosures[0].url,
                  "author": data.author,
                  "category": data.category
                }
                this.setState({
                  news: [...this.state.news, state_data]
                })
                console.log(this.state.news)
              }//if
            })//rss.ite.map
          })//then rss   
      }//if
    })//state.links.map
    this.setState({
      refreshing: false,
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
      news:[],
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
      //console.log(this.state.news)
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
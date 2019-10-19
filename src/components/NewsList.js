import React from 'react';
import { SafeAreaView, StatusBar, FlatList, View, ActivityIndicator } from 'react-native';
import { NavigationEvents } from "react-navigation";
import * as rssParser from 'react-native-rss-parser';
import moment from 'moment';
import 'moment/locale/tr';

import ListItems from '../components/ListItems'
let data_news = [];
const links = [
  {
    "link": "http://www.trt.net.tr/rss/gundem.rss",
    "category": "Son Dakika",
    "author": "TRT"
  },
  {
    "link": "https://www.haberturk.com/rss/manset.xml",
    "category": "Son Dakika",
    "author": "Habertürk"
  },
  {
    "link": "http://www.hurriyet.com.tr/rss/gundem",
    "category": "Son Dakika",
    "author": "Hürriyet"
  },
  {
    "link": "https://tr.sputniknews.com/export/rss2/archive/index.xml",
    "category": "Son Dakika",
    "author": "Sputnik Türkiye"
  },
  {
    "link": "https://t24.com.tr/rss/haber/gundem",
    "category": "Son Dakika",
    "author": "T24"
  },
  {
    "link": "https://www.haberturk.com/rss/ekonomi.xml",
    "category": "Ekonomi",
    "author": "Habertürk"
  },
  {
    "link": "http://www.trt.net.tr/rss/ekonomi.rss",
    "category": "Ekonomi",
    "author": "TRT"
  },
  {
    "link": "http://www.hurriyet.com.tr/rss/ekonomi",
    "category": "Ekonomi",
    "author": "Hürriyet"
  },
  {
    "link": "https://t24.com.tr/rss/haber/ekonomi",
    "category": "Ekonomi",
    "author": "T24"
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
    "link": "https://t24.com.tr/rss/haber/dunya",
    "category": "Dünya",
    "author": "T24"
  },
  {
    "link": "https://www.haberturk.com/rss/spor.xml",
    "category": "Spor",
    "author": "Habertürk"
  },
  {
    "link": "http://www.trt.net.tr/rss/spor.rss",
    "category": "Spor",
    "author": "TRT"
  },
  {
    "link": "http://www.hurriyet.com.tr/rss/spor",
    "category": "Spor",
    "author": "Hürriyet"
  },
  {
    "link": "https://www.fotomac.com.tr/rss/anasayfa.xml",
    "category": "Spor",
    "author": "Fotomaç"
  },
  {
    "link": "https://www.haberturk.com/rss/magazin.xml",
    "category": "Magazin",
    "author": "Habertürk"
  },
  {
    "link": "http://www.hurriyet.com.tr/rss/magazin",
    "category": "Magazin",
    "author": "Hürriyet"
  },
  {
    "link": "http://www.hurriyet.com.tr/rss/teknoloji",
    "category": "Teknoloji",
    "author": "Hürriyet"
  },
  {
    "link": "https://www.donanimhaber.com/rss/tum/",
    "category": "Teknoloji",
    "author": "Donanım Haber"
  },
  {
    "link": "https://t24.com.tr/rss/haber/bilim-teknoloji",
    "category": "Teknoloji",
    "author": "T24"
  },
  {
    "link": "https://www.haberturk.com/rss/kategori/kultur-sanat.xml",
    "category": "Kültür-Sanat",
    "author": "Habertürk"
  },
  {
    "link": "https://t24.com.tr/rss/haber/kultur-sanat",
    "category": "Kültür-Sanat",
    "author": "T24"
  },
  {
    "link": "https://www.haberturk.com/rss/kategori/saglik.xml",
    "category": "Sağlık",
    "author": "Habertürk"
  },
  {
    "link": "http://www.trt.net.tr/rss/saglik.rss",
    "category": "Sağlık",
    "author": "TRT"
  },
  {
    "link": "https://t24.com.tr/rss/haber/saglik",
    "category": "Sağlık",
    "author": "T24"
  },
  {
    "link": "http://www.hurriyet.com.tr/rss/saglik",
    "category": "Sağlık",
    "author": "Hürriyet"
  },
  {
    "link": "https://www.haberturk.com/rss/kategori/otomobil.xml",
    "category": "Otomobil",
    "author": "Habertürk"
  }
]

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
    }
  }

  componentDidMount(){
    StatusBar.setBackgroundColor('#0A5373')
  }
  selectCategory() {
    data_news = [];
    const link_list = links.filter((item) => (item.category == this.props.category))
    this.fetchNews(link_list)
  }

  async fetchNews(link_list) {
    link_list.map((data) => {
      this.fetchData(data)
    })
  }

  fetchData(data) {
    fetch(data.link)
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then(async (rss) => {
        this.setNewsToState(rss, data)
      })
      .catch((err) => console.log('err------------->', err))
  }

  setNewsToState(rss, data) {
    rss.items.map((item, index) => {
      if (index < 10) {
        let state_data = {
          "title": item.title,
          "url": item.links[0].url,
          "pubDate": moment(item.published || moment.now()).fromNow(),
          "thumbnail": item.enclosures[0].url == undefined ? null : item.enclosures[0].url,
          "author": data.author,
          "category": data.category
        }
        data_news = [...data_news, state_data]
      }
    })
    this.setState({ refreshing: false });

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
    this.selectCategory()
  }

  isLoading() {
    if (this.state.refreshing) {
      return (
        <View style={{
          width: '100%',
          height: '100%',
          marginTop: 20
        }}><ActivityIndicator size="large" color='#0A5373' /></View>
      )
    } else {
      return (
        <FlatList
          data={data_news}
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
      <SafeAreaView >
        <NavigationEvents
          onDidFocus={() => {
            this.setState({
              refreshing: true,
            });
            this.selectCategory()
          }}
        />
        {this.isLoading()}
      </SafeAreaView>
    );
  }
};

export default NewsList;
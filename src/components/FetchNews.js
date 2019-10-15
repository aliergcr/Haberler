import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as rssParser from 'react-native-rss-parser';

export default class FetchNews extends Component {
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

        };
    }

    componentDidMount() {
        this.FetchNews()
    }

    FetchNews() {
        this.state.links.map((data) => {
            fetch(data.link)
                .then((response) => response.text())
                .then((responseData) => rssParser.parse(responseData))
                .then((rss) => {
                    let index=0;
                    rss.items.map((item) => {
                        if(index!==10&&data.category=='Ekonomi'){
                            index+=1;
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
                        
                        }else{
                            return;
                        }
                });
                console.log(this.state.news)
            }) 
            
        })
       
    }

    render() {
        return (
            <View>
                <Text> FetchNews </Text>
            </View>
        );
    }
}

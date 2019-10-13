import React from 'react'
import { View, Text } from 'react-native'


export const fetchNews = ({link}) => {
        fetch(link)
          .then((response) => response.text())
          .then((responseData) => rssParser.parse(responseData))
          .then((rss) => {return rss})
            
          
}

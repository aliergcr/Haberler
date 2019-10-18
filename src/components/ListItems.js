import React from 'react'
import { View, StyleSheet  } from 'react-native';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Card } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const ListItems = ({ item, navigation }) => {
  return (
      <TouchableOpacity onPress={() => navigation.navigate("NewsWebView", {url:item.url, title:item.title})}>
        
        <Card > 
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: item.thumbnail }} />
            </Left>
            <Body style={{paddingBottom:5}}>
              <Text numberOfLines={4} style={{fontWeight: 'bold'}}>{item.title}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                <Text note  >{item.author}</Text>
                <Text note  >{item.pubDate}</Text>
              </View>
            </Body>
            <Right />
          </ListItem>
        </Card>
      </TouchableOpacity>
  )
}



export default ListItems
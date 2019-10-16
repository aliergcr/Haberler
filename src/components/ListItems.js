import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

const ListItems = ({ item, navigation }) => {
  //console.log(item)
  return (
    <List>
      <TouchableOpacity onPress={()=>navigation.navigate('NewsWebView', {url: item.url})}>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: item.thumbnail }} />
          </Left>
          <Body>
            <Text numberOfLines={4}>{item.title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text note >{item.author}</Text>
              <Text note >{item.pubDate}</Text>
            </View>
          </Body>
          <Right />
        </ListItem>
      </TouchableOpacity>
    </List>
  )
}




export default ListItems
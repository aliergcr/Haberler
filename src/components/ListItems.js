import React from 'react'
import { View,  } from 'react-native';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Card } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListItems = ({ item, navigation }) => {
  return (
    <List>
      <TouchableOpacity onPress={() => navigation.navigate("NewsWebView", {url:item.url})}>
        <Card>
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
        </Card>
      </TouchableOpacity>
    </List>
  )
}

export default ListItems
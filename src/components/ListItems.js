import React from 'react'
import { View } from 'react-native';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

const ListItems = ({item, navigation}) => {
  //console.log(item)
    return (
        <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: item.thumbnail }} />
          </Left>
          <Body>
            <Text numberOfLines={4}>{item.title}</Text>
            <View style={{ flexDirection: 'row', }}>
              <Text note >{item.author}</Text>
              <Text note >{item.pubDate}</Text>
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

export default ListItems
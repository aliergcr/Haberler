import React from 'react'
import { View } from 'react-native';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

const ListItems = ({item, navigation}) => {
  //console.log(item)
    return (
        <List>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: item.enclosures[0].url }} />
          </Left>
          <Body>
            <Text numberOfLines={2}>{item.title}</Text>
            <View style={{ flexDirection: 'row', }}>
              <Text note >Habertürk</Text>
              <Text note >{item.published}</Text>
            </View>
          </Body>
          <Right>
            <Button transparent onPress={() => navigation.navigate('NewsWebView', { url: item.links[0].url })}>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      </List>
    )
}

export default ListItems
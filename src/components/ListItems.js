import React from 'react'
import { Image, Dimensions, View } from 'react-native';
import { List, ListItem, Text, Icon, Left, Body, Right, Thumbnail, Card } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');
const ListItems = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("NewsWebView", { url: item.url, title: item.title })
      }}
    >
      <Card>
      <List >
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: item.thumbnail }} />
          </Left>
          <Body>
            <Text numberOfLines={2} style={{fontWeight: 'bold'}} >{item.title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop:5 }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon style={{ fontSize: 16, opacity: 0.5 }} name='paper' note />
                <Text note style={{ paddingLeft: 5 }}>{item.author}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                {item.pubDate!='' ? (<Icon style={{ fontSize: 16, opacity: 0.5 }} name='time' note />) : null}
                <Text note style={{ paddingLeft:5}}>{item.pubDate}</Text>
              </View>
            </View>
          </Body>

        </ListItem>
      </List>
      </Card>
    </TouchableOpacity>
  )
}

export default ListItems
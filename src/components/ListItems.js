import React from 'react'
import { Image } from 'react-native';
import { Card, CardItem, Text, Icon, Left, Body, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListItems = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("NewsWebView", { url: item.url, title: item.title })
      }}
    >
      <Card >
        <CardItem cardBody>
          <Image source={{ uri: item.thumbnail }} style={{ height: 200, width: null, flex:1 }} />
        </CardItem>
        <CardItem style={{ backgroundColor: 'rgba(57, 89, 101, 0.1)' }}>
          <Left>
            <Body>
              <Text  numberOfLines={3} style={{ fontWeight: 'bold' }}>{item.title}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem  >
          <Left>
            <Icon style={{fontSize:18 }} name="paper" />
            <Text note style={{fontSize:16}}>{item.author}</Text>  
          </Left>
          <Right style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Icon name= {item.pubDate!== '' ? 'time' : null}  />
            <Text note style={{ marginLeft: 5, fontSize: 14, }} >{item.pubDate}</Text>
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  )
}

export default ListItems
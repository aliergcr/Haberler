import React from 'react'
import { View, StyleSheet  } from 'react-native';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Card } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const ListItems = ({ item, navigation }) => {
  return (
      <TouchableOpacity onPress={() => navigation.navigate("NewsWebView", {url:item.url, title:item.title})}>
        
        <Card>
        <LinearGradient 
          start={{x: 0, y: 0}} 
          end={{x: 1, y: 0}} 
          colors={["#522157",'#C2649A']}>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: item.thumbnail }} />
            </Left>
            <Body style={{paddingBottom:5}}>
              <Text numberOfLines={4} style={{color: 'white', fontWeight: 'bold'}}>{item.title}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                <Text note style={{color: 'white'}} >{item.author}</Text>
                <Text note style={{color: 'white'}} >{item.pubDate}</Text>
              </View>
            </Body>
            <Right />
          </ListItem>
          </LinearGradient>
        </Card>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop:16,
    width:350,
  }
})

export default ListItems
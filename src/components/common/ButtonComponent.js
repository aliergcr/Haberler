import React from 'react'
import { Button, Icon } from 'native-base';

const ButtonComponent = ({navigation, name}) => {
    return (
        <Button transparent onPress={() =>{
            if(name==='menu'){
                navigation.openDrawer()
            }else if(name==='arrow-round-back'){
                navigation.navigate('NewsList')
            }
        }}>
            <Icon name= {name} />
        </Button>
    )
}

export default ButtonComponent

import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { HomeDrawer } from './src/components/navigation/Navigators'
import HomePage from './src/components/HomePage'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      visible: true
    }
  }

  componentDidMount(){
    StatusBar.setBackgroundColor('#0A5373')
    setTimeout(()=>{this.setState({visible:false})}, 2000)
  }

  isLoading(){
    if(this.state.visible){
      return (<HomePage/>);
    }else{
      return(<HomeDrawer />)
    };
    
  }
  render() {
    return (
        this.isLoading() 
    )
  }
};

export default App;


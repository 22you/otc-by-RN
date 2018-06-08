import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text,View} from 'react-native'
import { TabNavigator,TabBarBottom,StackNavigator } from 'react-navigation';

//pages info
import Index from '../pages/index'  //首页

const Navigator=TabNavigator({
    Index:{
        screen: Index,
        navigationOptions:{
          tabBarLabel:'首页',
          tabBarIcon:   ({tintColor})=>(<Icon name="home" size={matchsize(35)} color={tintColor}/>)
    
        }
      }  
})
const Addnavigator=StackNavigator({
    Tab:{
        screen:Navigator,
      },
},
{
    mode: 'card',
    headerMode: 'screen',
    tabBarPosition:'top',
    animationEnabled:true,
    swipeEnabled:true,
    tabBarOptions:{
      activeTintColor:'#ecd3d',
      inactiveTintColor:'#ecd3d',
      style:{
        backgroundColor:"#34a1ff"
      }
    }
})
export default class Route extends Component {
    constructor(props){
     super(props);
     this.state={
        text:'',
        selectedTab: 'Index'
      };
    }
   
    render(){
        
        return(
            <Addnavigator  />
        )
    }
}
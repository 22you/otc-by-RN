import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text,View} from 'react-native'
import { TabNavigator,TabBarBottom,StackNavigator } from 'react-navigation';
import matchsize from '../pages/common/matchsize'
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
},{
  
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled:false,
    tabBarOptions: {
      activeTintColor: '#1687D9',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: matchsize(25), // 文字大小
        paddingTop:0,
        marginTop:0,
    },
    tabStyle:{
      marginTop:matchsize(10),
       height: matchsize(180),
      paddingBottom:matchsize(20)
  },
  style: {
    // backgroundColor: '#ff6449', // TabBar 背景色
     height: matchsize(120),
  },
    },
    
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
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text,View,Platform} from 'react-native'
import { TabNavigator,TabBarBottom,StackNavigator } from 'react-navigation';
import matchsize from '../pages/common/matchsize'
//pages info
import Index from '../pages/index'  //首页
import Login from '../pages/login'// 登录页
const Navigator=TabNavigator({
    Index:{
        screen: Index,
        navigationOptions:{
          tabBarLabel:'首页',
          tabBarIcon:   ({tintColor})=>(<Icon name="home" size={matchsize(35)} color={tintColor}/>)
    
        }
      },
      Login:{
        screen:Login,
        tabBarLabel:'登录',
        navigationOptions:{
          headerTitle:"登录"
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
   height: matchsize(120),
},
  },
  
}
 )
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
    },
    navigationOptions:({navigation})=>({
      headerBackTitle:null,
      headerStyle: Platform.OS==='ios'?{
        backgroundColor: '#34a1ff',
      }:{
        backgroundColor:'#34a1ff',
        paddingTop:30,
        height:60,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: matchsize(32),
        alignSelf:'center',
        justifyContent:'center',
        flex:1,
        textAlign:'center'
              
      },
    })
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
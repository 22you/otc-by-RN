import React,{Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView
  } from 'react-native';
import {TabView } from 'teaset' 
// import Register from './reg'
// import Login from './login'
  export default class Index extends Component{
      constructor(props){
       super(props);
       this.state={
     
       }
      }
      render(){
          return(
              <ScrollView>
                  <View>
                      <View style={base.heaLeft}>dsddddddddddddd</View>
                      <View></View>
                      <View></View>
                  </View>
                <TabView style={{flex: 1}} type='projector'>
                <TabView.Sheet
                    title='Index'
                   
                >
                 {/* <Register /> */}
                </TabView.Sheet>
                <TabView.Sheet
                    title='Index'
                  
                    badge={1}
                >
                    {/* <Login /> */}
                </TabView.Sheet>
                </TabView>
              </ScrollView>
          )
      }
  }
  const base=StyleSheet.create({
    item:{
      marginTop:10,
      backgroundColor:'#fff',
      paddingHorizontal:'3%',
      paddingVertical:15,
      flexDirection:'row',
      justifyContent:'space-between',
  
    }
    })
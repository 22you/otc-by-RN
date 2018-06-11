import React,{Component} from 'react';
import {
    Platform,
    Image,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView
  } from 'react-native';
import {TabView,SegmentedBar,Carousel,Label} from 'teaset' ;
import matchsize from './common/matchsize'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import Swiper from 'react-native-swiper'
  export default class Index extends Component{
    static navigationOptions =({navigation})=>({
        header: null
      });
   
      constructor(props){
       super(props);
       this.state={
        banners:[],
        newNotice:'',
        barItems:[ 'Apple',
        'Banana',
        'Cherry',
        'Durian',],
        activeIndex:0,
        transactionMode:1,
        coinInfo:[],
        coinCode:''
       }
      }
      async componentDidMount(){
        //查询币种信息
        let checkCoins=config.baseUrl+config.api.coinType;
        await axios(checkCoins)
        .then((res)=>{
            if(res.data.success){
                this.setState({
                coinInfo:res.data.obj,
                coinCode:res.data.obj[0].coinCode 
                })
            }
        

        })
      }
      componentDidMount(){
          console.log('coinCode',this.state.coinCode);
          
          //首页中的banner查询
          let bannerUrl=config.baseUrl+config.api.banner;
          axios.get(bannerUrl)
          .then((res)=>{
              if(res.data.success){
                  this.setState({
                    banners:res.data.obj 
                  })
              }

          })
          .catch((err)=>{
            console.log(err);
            
          })
          //查询首页中的公告
          let noticeUrl = config.baseUrl+config.api.notice;
          axios.get(noticeUrl)
          .then((res)=>{
            if(res.data.success){
                this.setState({
                    newNotice:res.data.obj[0].content
                })
            }
            
          })
          .catch((err)=>{
           console.log(err);
           
          })
         
          //查询广告大厅的详细内容
          let adHallDetail=config.baseUrl+config.advertisement.adHallDetail+'transactionMode='+this.state.transactionMode+'&page=1'+'&coinCode='+this.state.coinCode;
          axios.get(adHallDetail)
          .then((res)=>{
            console.log(res.data,res.data,adHallDetail);

          })
      }
   
      onCarouselChange = (index) => {
        index != this.state.activeIndex && this.setState({
            activeIndex: index
           
        });

      }
      onSegmentedBarChange = (index) => {
        if (index != this.state.activeIndex) {
          this.setState({activeIndex: index});
          if (this.refs.carousel) {
            this.refs.carousel.scrollToPage(index, false);
          }
        }
      }
      render(){
        const {banners,newNotice,barItems,activeIndex,coinInfo,coinCode}=this.state;
        
        const bannerlist=banners.length?
        banners.map((item,index)=>(
        
          <View style={base.slide1} key={index}>
            <Image source={{uri:config.baseUrl+item.picturePath}} style={{width:'100%',height:'100%'}}/>
          </View>
        ))
        :
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <Text style={{flexDirection:'row',justifyContent:'center'}}>loading...</Text>
        </View>;
          return(
              <ScrollView>
                  <StatusBar
                    backgroundColor='transparent'
                    translucent={true}
                    hidden={false}
                    animated={true}  
                    barStyle="light-content"    
                    />
                  <View style={base.indexHea}>
                      <View style={base.heaLeft}><Text style={{fontSize:matchsize(26),marginLeft:15,color:'#fff'}}>客服</Text></View>
                      <View style={base.heaCenter}>
                          <Text style={base.heaItem}>购买</Text>
                          <Text style={base.heaItem}>出售</Text>
                      </View>
                      <View>
                         <Icon name="search" size={matchsize(29)}
                              color={'#ddd'}
                              style={{paddingHorizontal:20}}/> 
                      </View>
                  </View>
                  <View style={base.banner}>
                  <Swiper style={{height:200,backgroundColor:'red'}} showsButtons={false}>
                        {bannerlist}
                  </Swiper>
                  </View>
                  <View style={base.notice}>
                    <Text style={{fontSize:matchsize(26)}}><Text>公告:</Text>{newNotice}</Text>
                  </View>
                  <View style={base.trade}>
                  <SegmentedBar 
                  justifyItem='scrollable'
                  activeIndex={activeIndex}
                  onChange={index => this.onSegmentedBarChange(index)}
                  >
                  {
                      coinInfo.map((item, index) => {
                          return <SegmentedBar.Item key={item.id} title={item.coinCode} />
                      })
                  }
                  </SegmentedBar>
                  <Carousel
                    style={{backgroundColor:'#fff', minHeight: 238}}
                    carousel={false}
                    startIndex={activeIndex}
                    cycle={false}
                    ref='carousel'
                    onChange={index => this.onCarouselChange(index)}
                    >
                    {barItems.map((item, index) => (
                        <View style={base.coinDetailItem} key={index}>
                           <Image></Image>
                           <View style={base.coinItemC}>
                               <View style={base.coinItemChea}>
                                  <Text style={base.coinUserName}>qiaowei</Text>
                                  <View style={base.bankTag}><Text style={base.TagTxt}>银行卡转账</Text></View>
                                  <View style={base.alipayTag}><Text style={base.TagTxt}>支付宝</Text></View>
                               </View>
                               <View style={base.coinItemMid}>
                                <Text style={{marginRight:matchsize(15)}}>交易 256</Text>
                                <Text>信任人数 210</Text>
                               </View>
                               <View style={base.coinItemFotter}>
                                <Text>交易限额：100-30000 CNY</Text>
                               </View>
                           </View>
                          
                        </View>
                    ))}
                    </Carousel>
                  </View>
               
              </ScrollView>
          )
      }
  }
  const base=StyleSheet.create({
    coinItemChea:{
       flexDirection:'row',
       alignItems:'center'

    },
    coinUserName:{
      fontSize:matchsize(30),
      color:'#333333'  
    },
    coinItemMid:{
        flexDirection:'row',
    },
    coinDetailItem:{
        borderTopWidth:1,
        borderTopColor:'#ddd',
        paddingVertical:matchsize(44),
        marginLeft:matchsize(30),
        paddingRight:matchsize(30)
    },
    indexHea:{
     flexDirection:'row',
     justifyContent:'space-between',
     paddingTop:matchsize(55),
     paddingBottom:matchsize(15),
     backgroundColor:'#2887fb',
     alignItems:'center'
    },
    heaItem:{
        color:'#fff',
        fontSize:matchsize(26),
        textAlign:'center',
        width:'50%',
        paddingVertical:4
    },
    heaCenter:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:25,
        width:matchsize(340),
        justifyContent:'space-between'
    },
    notice:{
        paddingHorizontal:'3%',
        paddingVertical:matchsize(15),
        backgroundColor:'#fff'
    },
    trade:{
        marginTop:matchsize(24),
        backgroundColor:'#fff',

    },
    bankTag:{
        backgroundColor:'red',
        paddingHorizontal:matchsize(10),
        borderRadius:10,
        marginLeft:matchsize(20),
        flexDirection:'row',
        alignItems:'center',
        height:matchsize(30),
    },
    
    alipayTag:{
        backgroundColor:'#25a2f7',
        paddingHorizontal:matchsize(10),
        borderRadius:10,
        marginLeft:matchsize(20),
        flexDirection:'row',
        alignItems:'center',
        height:matchsize(30),

        
    },
    TagTxt:{
        color:'#fff',
        fontSize:matchsize(20),
    },
    })
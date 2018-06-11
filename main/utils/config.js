
let config = {
     //肖凯
    baseUrl : 'http://172.16.10.14:6002/',
    api: {
        login: 'mobile/nouser/api/ajaxValidation.do?',//登录 userName,password
        banner:'mobile/article/indexBanner',//banner查询
        notice:'mobile/article/indexNotice?type=new_notice',//最新公告查询
        coinType:'mobile/dictionary/appFindCoinCodeList',//币种信息查询
        
    },
    //广告管理
    advertisement:{
        adHallDetail:'mobile/user/advertisement/advertisingHallDetail?'//广告大厅交易详情 transactionMode=1&page=1&payType=1&coinCode=LTC
    },
    //订单相关的api
    order:{

    },
    //钱包相关的
    wallet:{

    },
    //个人账户
    account:{

    }
    
}
export default config;

Page({

  data: {
    mydata: '',
    background: [
      '../../../../../Images/image1.png',
      '../../../../../Images/image2.png',
      '../../../../../Images/image3.png'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    steps:[0,2,3],
    notice:{
      text: "最新消息！今年高考时间推迟一个月至7月举行",
      link:"../notice/notice"
    },
    grids1: [{
        text: "我的高考",
      image: "https://g.eol.cn/static/media/major.008819a9.svg",
        link: "../myexam/myexam"
      },
       {
        text: "专业解读",
        image: "https://g.eol.cn/static/media/major.008819a9.svg",
         link: "../sear/sear?type=major"
      },
       {
        text: "查大学",
        image: "https://g.eol.cn/static/media/college2.2d3b57e0.svg",
        link: "../sear/sear?type=college"
      },
      {
        text: "省控线查询",
        image: "https://g.eol.cn/static/media/newgk.a8700766.svg",
        link: "../provinceline/provinceline"
      },
      {
        text: "志愿推荐",
        image: "https://g.eol.cn/static/media/major.008819a9.svg",
        link: "../collection/collection"
      },
      {
        text: "测评",
        image: "https://g.eol.cn/static/media/major.008819a9.svg",
        link: "../collection/collection"
      }
    ],
  },

  onShow: function(options) {
    var _this=this;
    //首页获取用户信息 看是否记录
    wx.getStorage({
      key: 'data',
      success: function (res) {
        _this.setData({
          mydata:res.data
        });
      },
    })
  },
  tosear:function(){
    wx.navigateTo({
      url: '../sear/sear?type=common'
    })
  },

  toMyExam:function(){
    wx.navigateTo({
      url: '../myexam/myexam'
    })
  }

})
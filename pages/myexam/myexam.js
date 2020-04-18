const { $Toast } = require('../../dist/base/index');
Page({
  data: {
    name:"",
    class1: [{
      id: 1,
      name: '文科',
    },
    {
      id: 2,
      name: '理科'
    }],
    classcurrent: '理科',
    position: 'left',
    checked: false,
    disabled: false,
    batch1: [{
      id: 1,
      name: '本科一批',
    },
    {
      id: 2,
      name: '本科二批',
    },
    {
      id: 3,
      name: '专科批次'
    }],
    batchcurrent: '本科一批',
    position: 'left',
    checked: false,
    disabled: false,
    region: ['广东省', '广州市', '海珠区'],
    grades:[],
    btntext:"录 入"
  },
  handleClassChange({ detail = {} }) {
    this.setData({
      classcurrent: detail.value
    });
  },
  handleBatchChange({ detail = {} }) {
    this.setData({
      batchcurrent: detail.value
    });
  },
  submitGrades: function () {
    //todo: submitGrades
    //这里暂时存储在缓存里
  var mydata = {
    name: this.data.name,
    class:this.data.classcurrent,
    batch: this.data.batchcurrent,
    region: this.data.region,
    grades: this.data.grades,
  }
    wx.setStorageSync("data", mydata)
    $Toast({
      content: '提交成功',
      type: 'success'
    });
    setTimeout(() => {
      $Toast.hide();
      wx.navigateBack({
        delta: 1
      })
    }, 1000);
 
  },
  onLoad: function (options) {
    // wx.showModal({
    //   title: '提示',
    //   content: '进入此页面判断是否填写过',
    //   showCancel:false
    // })
    var _this = this
    wx.getStorage({
      key: 'data',
      success: function(res) {
        _this .setData({
          btntext: "修正信息"
        });
      },
    })

  },

  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },

  saveName:function(v){
    this.setData({
      name: v.detail.detail.value
    })
  }
})
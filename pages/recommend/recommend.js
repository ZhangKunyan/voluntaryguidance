// pages/recommend/recommend.js
const { $Toast } = require('../../dist/base/index');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:'tab1',
    region:'辽宁',
    provinces: ["安徽", "北京", "重庆", "福建", "甘肃", "广东", "广西", "贵州", "河北", "河南", "黑龙江", "海南", "湖南", "湖北", "吉林", "江苏", "江西", "辽宁", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西", "上海", "四川", "天津", "新疆", "西藏", "云南", "浙江"],
    class1: [{
      id: 1,
      name: '文科',
    },
    {
      id: 2,
      name: '理科'
    }
    ],
    classcurrent: '理科',
    position: 'left',
    checked: false,
    disabled: false,
    btntext:"推 荐",
  },
  submitInfo: function () {
    //todo: submitGrades
    //这里暂时存储在缓存里
    var mydata = {
      class: this.data.classcurrent,
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

  inputChangeHandle: function (e) {
    var prop = e.target.dataset['prop']
    var changed = {}
    changed[prop] = e.detail.value
    this.setData(changed)
  },
  
  bindRegionChange: function (e) {
    this.setData({
      region: this.data.provinces[e.detail.value]
    })
  },
  handleClassChange({
    detail = {}
  }) {
    this.setData({
      classcurrent: detail.value
    });
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
// pages/provinceline/provinceline.js
Page({
  data: {
    linedata:[],
    region: '河北',
    classcurrent: '理科',
    position: 'left',
    year:2019,
    checked: false,
    disabled: false,
    classid: [{
      id: 1,
      name: '文科',
    },
    {
      id: 2,
      name: '理科'
    }],
    btntext:'查询',
    provinces: ["安徽", "北京", "重庆", "福建", "甘肃", "广东", "广西", "贵州", "河北", "河南", "黑龙江", "海南", "湖南", "湖北", "吉林", "江苏", "江西", "辽宁", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西", "上海", "四川", "天津", "新疆", "西藏", "云南", "浙江"]
  },
  bindRegionChange: function (e) {
    this.setData({
      region: this.data.provinces[e.detail.value]
    })
  },
  handleClassChange({ detail = {} }) {
    this.setData({
      classcurrent: detail.value
    });
  },
  submitInfo:function(){
    var that = this;
    wx.request({
      url: 'http://localhost/Line/getprovinceline?province=' + that.data.region + '&year=' + that.data.year,
      success: function (res) {
        console.log(res)
        that.setData({
          linedata: res.data['data']
        })
        if (res.data['data'].length == 0){
          wx.showModal({
            title: '提示',
            content: '数据库没有数据',
            showCancel:false
          })
        }
      }
    })
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
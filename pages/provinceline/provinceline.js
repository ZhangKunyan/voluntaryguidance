// pages/provinceline/provinceline.js
Page({
  data: {
    region: ['辽宁省'],
    classcurrent: '理科',
    position: 'left',
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
    btntext:'查询'
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  handleClassChange({ detail = {} }) {
    this.setData({
      classcurrent: detail.value
    });
  },
  submitInfo:function(){

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
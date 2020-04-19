// pages/collegedetail/collegedetail.js
Page({


  data: {
    collegeid:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      collegeid: options.id
    })
  },

  
})
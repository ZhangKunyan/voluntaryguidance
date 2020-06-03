// pages/majordetail/majordetail.js
Page({

  data: {
    current: 'tab1',
    detail:{}
  },

  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  onLoad: function (options) {
    
    console.log(options)
    var that = this;
    wx.request({
      url: 'http://localhost/majorslist/getmajorDetail/' + options.id,
      success: function (res) {
        that.setData({
        detail: res.data[0]
        })
      }
    })
  },

})
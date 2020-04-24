// pages/mbtidetail/mbtidetail.js
Page({


  data: {
    type:""
  },

 
  onLoad: function (options) {
    this.setData({
      type:options.type
    })
  },

 
})
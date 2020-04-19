// pages/majordetail/majordetail.js
Page({


  data: {
    majorid:0
  },


  onLoad: function (options) {
    console.log(options)
    this.setData({
      majorid:options.id
    })
  },

})
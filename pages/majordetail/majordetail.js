// pages/majordetail/majordetail.js
Page({

  data: {
    majorid:0,
    current: 'tab1'
  },

  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      majorid:options.id
    })
  },

})
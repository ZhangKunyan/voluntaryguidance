// pages/majorlist/majorlist.js
Page({

  data: {
    majors: [
      // {
      //   nameclass: "基本专业",
      //   items: [{
      //     id: 100,
      //     name: "智能电网信息工程"
      //   }, {
      //     id: 101,
      //     name: "光源与照明"
      //   }, {
      //     id: 103,
      //     name: "电气工程与智能控制"
      //   }]
      // },
      // {
      //   nameclass: "特设专业",
      //   items: [{
      //     id: 104,
      //     name: "智能电网信息工程"
      //   }, {
      //     id: 105,
      //     name: "光源与照明"
      //   }, {
      //     id: 106,
      //     name: "电气工程与智能控制"
      //   }]
      // }
    ]
  },

  onLoad: function(options) {
    var that = this;
    wx.request({
      url: 'http://localhost/majorslist/getmajorsList/' + options.classid,
      success: function(res) {
        that.setData({
          majors: res.data
        })
      }
    })

  },


})
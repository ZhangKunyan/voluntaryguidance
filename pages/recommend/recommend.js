// pages/recommend/recommend.js
const {
  $Toast
} = require('../../dist/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0,
    pushres: ["清华大学", "北京大学"],
    mbti: {},
    examgrade: {},
    current: 'tab1',
    region: '辽宁',
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
    btntext: "推 荐",
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
  handleChange({
    detail
  }) {
    this.setData({
      current: detail.key
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var mbti = wx.getStorageSync("mbti")
    var examgrade = wx.getStorageSync("data")
    this.setData({
      mbti: mbti,
      examgrade: examgrade
    })
  },

  topushbygrade: function () {

var that = this;
    var examgrade = this.data.examgrade;
    wx.request({
      url: 'http://localhost/Line/pushbygrade?type=' + examgrade.class + "&region=" + examgrade.region + "&grade1=" + examgrade.grades[0] + "&grade2=" + examgrade.grades[1] + "&grade3=" + examgrade.grades[2] + "&grade4=" + examgrade.grades[3],
      success: function (res) {
        console.log(res)
        that.setData({
          pushres:res.data.data
        })
      }
    })

    this.setData({
      type: 1
    })
  }

})
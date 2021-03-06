// pages/collegedetail/collegedetail.js
Page({


  data: {
    collegeid: 0,
    current: 'tab1',
    college: {
      id: 100,
      name: "清华大学",
      tags: ["985", "211", "双一流", "综合类"],
      location: "北京市海淀区",
      logo: "https://static-data.eol.cn/upload/logo/140.jpg",
      intro:""
    },
    region: "北京",
    batch: "理科",
    year: "2018",
    provinces: ["安徽", "北京", "重庆", "福建", "甘肃", "广东", "广西", "贵州", "河北", "河南", "黑龙江", "海南", "湖南", "湖北", "吉林", "江苏", "江西", "辽宁", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西", "上海", "四川", "天津", "新疆", "西藏", "云南", "浙江"],
    batches: ["文科", "理科"],
    years: ["2016", "2017", "2018"]
  },
  handleTextChange() {
    console.log('tap')
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: this.data.provinces[e.detail.value]
    })

    this.refreshLineData();
  },
  bindYearChange: function (e) {
    this.setData({
      year: this.data.years[e.detail.value]
    })
    this.refreshLineData();
  },
  bindBatchChange: function (e) {
    this.setData({
      batch: this.data.batches[e.detail.value]
    })
    this.refreshLineData();
  },

  refreshLineData:function(e){
var that = this;
    wx.request({
      url: 'http://localhost/college/getcollegesLine/' + this.data.college.id+"/"+
        this.data.year + "?type=" + this.data.batch + "&province=" + this.data.region ,
      success(res) {
        var college = that.data.college
        college['line'] = res.data['line']
        that.setData({
          college: college
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this;
    this.setData({
      collegeid: options.id
    })

    wx.request({
      url: 'http://localhost/college/getcollegesDetail/' + options.id,
      success(res) {
        that.setData({
          college: res.data
        })
      }
    })


  }
})
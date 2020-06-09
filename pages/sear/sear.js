Page({
  data: {
    inputShowed: false,
    inputVal: "",
    typetext: "搜索",
    type: 0,
    typeOption: "",
    majorCurrentTab: 'Undergraduate',
    colleges: [
    ],
    preseartexts: [],
    majors1: [],
    majors2: [],
  },
  handleMajorCurrentTabChange({
    detail
  }) {
    var that = this;
    this.setData({
      majorCurrentTab: detail.key
    });
 
    wx.request({
      url: 'http://localhost/majorslist/getmajorsClassList/' + detail.key,
      success: function (res) {
        console.log(res)
        that.setData({
          majors2: res.data
        })
      }
    })

  },
  onLoad: function(options) {
    var type = 0;
    var typetext = "搜索"
    var that = this;
    var typeOption = "";

    if (options.hasOwnProperty("type")) {
      console.log(options.type)
      typeOption = options.type;
      switch (options.type) {
        case "common":
          type = 0;

          break; // 0--- 全查
        case "college":
          typetext = "查大学"
          type = 1;
          break; // 1--- 查大学
        case "major":
          typetext = "查专业"
          type = 2;
          break; // 2--- 查专业
        default:
          type = 0;
          break;
      }
    }




    //如果是专业
    if (type == 2) {
      //  http://localhost/majorslist/getmajorsList

      wx.request({
        url: 'http://localhost/majorslist/getmajorsClassList',
        success: function(res) {
          console.log(res)
          that.setData({
            majors1: res.data
          })
        }
      })
    }



    if (type == 1) //差大学
    {
      wx.request({
        url: 'http://localhost/college/getcollegesList',
        success: function(res) {
          console.log(res)
          that.setData({
            colleges: res.data
          })
        }
      })
    }


    this.setData({
      type: type,
      typeOption: typeOption,
      typetext: typetext,
    })

  },
  toCollegeDetail: function(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/collegedetail/collegedetail?id=' + e.currentTarget.dataset.id,
    })
  },

  selectMajorType: function(e) {
    var index = e.currentTarget.dataset.index;
    // majorCurrentTab: 'Undergraduate',
    var majorCurrentTab = this.data.majorCurrentTab
    var majors = []
    if (majorCurrentTab == "Undergraduate") {
      majors = this.data.majors1
    }
    if (majorCurrentTab == "Specialty") {
      majors = this.data.majors2
    }
    var selects = []
    var idindex = []

    for (var i = 0; i < majors[index].items.length; i++) {
      selects.push(majors[index].items[i].name)
      idindex.push(majors[index].items[i].id)
    }
    wx.showActionSheet({
      itemList: selects,
      success(res) {
        wx.navigateTo({
          url: '/pages/majorlist/majorlist?classid=' + idindex[res.tapIndex],
        })
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },

  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
    //查询搜索提示
    var that = this;

    wx.request({
      url: 'http://localhost/Search/like/' + this.data.typeOption + "?text=" + e.detail.value,
      success: function(res) {
        console.log(res)
        that.setData({
          preseartexts: res.data.pretext
        })
      }

    })
  },

  clickpreSear: function(e) {
    if (this.data.typeOption == "college") {
      wx.navigateTo({
        url: '/pages/collegedetail/collegedetail?id=' + e.currentTarget.dataset.id,
      })
    }

  }
});
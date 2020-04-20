Page({
  data: {
    inputShowed: false,
    inputVal: "",
    typetext: "搜索",
    type: 0,
    majorCurrentTab: 'Undergraduate',
    colleges: [{
        id: 100,
        name: "清华大学",
        tags: ["985", "211", "双一流", "综合类"],
        logo: "https://static-data.eol.cn/upload/logo/140.jpg",
      },
      {
        id: 101,
        name: "北京大学",
        tags: ["985", "211", "双一流", "文学类"],
        logo: "https://static-data.eol.cn/upload/logo/31.jpg",
      },
      {
        id: 102,
        name: "浙江大学",
        tags: ["985", ],
        logo: "https://static-data.eol.cn/upload/logo/114.jpg"
      },
      {
        id: 103,
        name: "中南大学",
        tags: ["985", "211"],
        logo: "https://static-data.eol.cn/upload/logo/123.jpg"
      }
    ],

    majors1: [{
        name: "工学",
        level: 0,
        items: [{
          name: "电气1类",
          level: 1,
          items: [{
              type: "基本专业",
              level: 2,
              items: [{
                level: 3,
                name: "电气工程及其自动化"
              }]
            },
            {
              type: "特设专业",
              level: 2,
              items: [{
                level: 3,
                name: "智能电网信息工程"
              }, {
                level: 3,
                name: "光源与照明"
              }, {
                level: 3,
                name: "电气工程与智能控制"
              }]
            }
          ]
        }, {
          name: "电气2类",
          level: 1,
          items: [{
              type: "基本专业",
              level: 2,
              items: [{
                level: 3,
                name: "电气工程及其自动化"
              }]
            },
            {
              type: "特设专业",
              level: 2,
              items: [{
                level: 3,
                name: "智能电网信息工程"
              }, {
                level: 3,
                name: "光源与照明"
              }, {
                level: 3,
                name: "电气工程与智能控制"
              }]
            }
          ]
        }, {
          name: "电气3类",
          level: 1,
          items: [{
              type: "基本专业",
              level: 2,
              items: [{
                level: 3,
                name: "电气工程及其自动化"
              }]
            },
            {
              type: "特设专业",
              level: 2,
              items: [{
                level: 3,
                name: "智能电网信息工程"
              }, {
                level: 3,
                name: "光源与照明"
              }, {
                level: 3,
                name: "电气工程与智能控制"
              }]
            }
          ]
        }]
      },
      {
        name: "工学",
        level: 0,
        items: [{
          name: "电气类",
          level: 1,
          items: [{
              type: "基本专业",
              level: 2,
              items: [{
                level: 3,
                name: "电气工程及其自动化"
              }]
            },
            {
              type: "特设专业",
              level: 2,
              items: [{
                level: 3,
                name: "智能电网信息工程"
              }, {
                level: 3,
                name: "光源与照明"
              }, {
                level: 3,
                name: "电气工程与智能控制"
              }]
            }
          ]
        }]
      }, {
        name: "工学",
        level: 0,
        items: [{
          name: "电气类",
          level: 1,
          items: [{
              type: "基本专业",
              level: 2,
              items: [{
                level: 3,
                name: "电气工程及其自动化"
              }]
            },
            {
              type: "特设专业",
              level: 2,
              items: [{
                level: 3,
                name: "智能电网信息工程"
              }, {
                level: 3,
                name: "光源与照明"
              }, {
                level: 3,
                name: "电气工程与智能控制"
              }]
            }
          ]
        }]
      }, {
        name: "工学",
        level: 0,
        items: [{
          name: "电气类",
          level: 1,
          items: [{
              type: "基本专业",
              level: 2,
              items: [{
                level: 3,
                name: "电气工程及其自动化"
              }]
            },
            {
              type: "特设专业",
              level: 2,
              items: [{
                level: 3,
                name: "智能电网信息工程"
              }, {
                level: 3,
                name: "光源与照明"
              }, {
                level: 3,
                name: "电气工程与智能控制"
              }]
            }
          ]
        }]
      }
    ],
    majors2: [{
        name: "专科_工学",
        level: 0,
        items: [{
          name: "电气1类",
          level: 1,
          items: [{
              type: "基本专业",
              level: 2,
              items: [{
                level: 3,
                name: "电气工程及其自动化"
              }]
            },
            {
              type: "特设专业",
              level: 2,
              items: [{
                level: 3,
                name: "智能电网信息工程"
              }, {
                level: 3,
                name: "光源与照明"
              }, {
                level: 3,
                name: "电气工程与智能控制"
              }]
            }
          ]
        }, {
          name: "电气2类",
          level: 1,
          items: [{
              type: "基本专业",
              level: 2,
              items: [{
                level: 3,
                name: "电气工程及其自动化"
              }]
            },
            {
              type: "特设专业",
              level: 2,
              items: [{
                level: 3,
                name: "智能电网信息工程"
              }, {
                level: 3,
                name: "光源与照明"
              }, {
                level: 3,
                name: "电气工程与智能控制"
              }]
            }
          ]
        }, {
          name: "电气3类",
          level: 1,
          items: [{
              type: "基本专业",
              level: 2,
              items: [{
                level: 3,
                name: "电气工程及其自动化"
              }]
            },
            {
              type: "特设专业",
              level: 2,
              items: [{
                level: 3,
                name: "智能电网信息工程"
              }, {
                level: 3,
                name: "光源与照明"
              }, {
                level: 3,
                name: "电气工程与智能控制"
              }]
            }
          ]
        }]
      },
      {
        name: "工学",
        level: 0,
        items: [{
          name: "电气类",
          level: 1,
          items: [{
              type: "基本专业",
              level: 2,
              items: [{
                level: 3,
                name: "电气工程及其自动化"
              }]
            },
            {
              type: "特设专业",
              level: 2,
              items: [{
                level: 3,
                name: "智能电网信息工程"
              }, {
                level: 3,
                name: "光源与照明"
              }, {
                level: 3,
                name: "电气工程与智能控制"
              }]
            }
          ]
        }]
      }, {
        name: "工学",
        level: 0,
        items: [{
          name: "电气类",
          level: 1,
          items: [{
              type: "基本专业",
              level: 2,
              items: [{
                level: 3,
                name: "电气工程及其自动化"
              }]
            },
            {
              type: "特设专业",
              level: 2,
              items: [{
                level: 3,
                name: "智能电网信息工程"
              }, {
                level: 3,
                name: "光源与照明"
              }, {
                level: 3,
                name: "电气工程与智能控制"
              }]
            }
          ]
        }]
      }, {
        name: "工学",
        level: 0,
        items: [{
          name: "电气类",
          level: 1,
          items: [{
              type: "基本专业",
              level: 2,
              items: [{
                level: 3,
                name: "电气工程及其自动化"
              }]
            },
            {
              type: "特设专业",
              level: 2,
              items: [{
                level: 3,
                name: "智能电网信息工程"
              }, {
                level: 3,
                name: "光源与照明"
              }, {
                level: 3,
                name: "电气工程与智能控制"
              }]
            }
          ]
        }]
      }
    ],
  },
  handleMajorCurrentTabChange({
    detail
  }) {
    this.setData({
      majorCurrentTab: detail.key
    });
  },
  onLoad: function(options) {
    var type = 0;
    var typetext = "搜索"
    if (options.hasOwnProperty("type")) {
      console.log(options.type)
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

    }


    this.setData({
      type: type,
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

    for (var i = 0; i < majors[index].items.length; i++) {
      selects.push(majors[index].items[i].name)
    }
    wx.showActionSheet({
      itemList: selects,
      success(res) {
        wx.navigateTo({
          url: '/pages/majorlist/majorlist?type=' + majorCurrentTab + '&obj=' + majors[index].name + "&class=" + selects[res.tapIndex],
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
  }
});
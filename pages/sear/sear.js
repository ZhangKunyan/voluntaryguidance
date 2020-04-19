Page({
  data: {
    inputShowed: false,
    inputVal: "",
    typetext: "搜索",
    type: 0,
    colleges: [
      {
        name: "清华大学",
        tags: ["985", "211", "双一流"],
        logo: "http://p3.qhimg.com/bdm/384_237_0/t01db65c4075c033b04.jpg",
      },
      {
        name: "北京大学",
        tags: ["985", "211", "双一流"],
        logo: "http://p3.qhimg.com/bdm/384_237_0/t01db65c4075c033b04.jpg",
      },
      {
        name: "同济大学",
        tags: ["985", "211", "双一流"],
      },
      {
        name: "厦门大学",
        tags: ["985", "211", "双一流"],

      }
    ],
    majorsInterpret:[
      {
        name:"计算机科学与技术"
      },
      {
        name:"软件工程"
      },
      {
        name: "通信工程"
      },
      {
        name: "网络工程"
      },
      ] 
  },

  onLoad: function (options) {
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

    this.setData({
      type: type,
      typetext: typetext,
    })

},


  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});
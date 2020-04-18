Page({
  data: {
    inputShowed: false,
    inputVal: "",
    typetext: "搜索",
    type: 0,
    colleges: [
      {
        name: "清华大学",
        flags: ["985", "211", ""],
        logo: "http://p3.qhimg.com/bdm/384_237_0/t01db65c4075c033b04.jpg",
      },
      {
        name: "北京大学",
        flags: ["985", "211", ""],

      },
      {
        name: "清华大学",
        flags: ["985", "211", ""],

      }

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
        case "borderline":
          typetext = "省份"
          type = 3;
          break; // 3--- 查分数线
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
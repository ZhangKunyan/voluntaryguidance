import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {

  //从缓存获取mbti考试结果
  var mbti = wx.getStorageSync("mbti")

  var queue = []
  if (mbti) {
    var res = mbti.res
    if (res) {
      queue.push((res.E) / (res.E + res.I) * 100)
      queue.push((res.S) / (res.S + res.N) * 100)
      queue.push((res.T) / (res.T + res.F) * 100)
      queue.push((res.J) / (res.J + res.P) * 100)
      queue.push((res.I) / (res.E + res.I) * 100)
      queue.push((res.N) / (res.S + res.N) * 100)
      queue.push((res.F) / (res.T + res.F) * 100)
      queue.push((res.P) / (res.J + res.P) * 100)
    }
    console.log(queue)
  }

  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FF9F7F"],
    xAxis: {
      show: false
    },
    yAxis: {
      show: false
    },
    radar: {
      // shape: 'circle',
      indicator: [{
          name: '外向(E)',
          max: 100
        },
        {
          name: '感觉(S)',
          max: 100
        },
        {
          name: '思考(T)',
          max: 100
        }, {
          name: '判断(J)',
          max: 100
        },
        {
          name: '内向(I)',
          max: 100
        },
        {
          name: '直觉(N)',
          max: 100
        },
        {
          name: '情感(F)',
          max: 100
        },
        {
          name: '感知(P)',
          max: 100
        }
      ]
    },
    series: [{
      name: '预算 vs 开销',
      type: 'radar',
      data: [{
        value: queue,
        name: ' '
      }]
    }]
  };

  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    },
    rescurrent: "probably",
    btntext: "分析性格",
    qlibrary: [{
        ques: "当你要外出一整天，你会",
        options: [{
          text: " 计划你要做什么和在什么时候做，",
          weight: "J"
        }, {
          text: "说去就去",
          weight: "P"
        }]
      },
      {
        ques: "你认为自己是一个",
        options: [{
            text: "较为随兴所至的人",
            weight: "P"
          },
          {
            text: "较为有条理的人",
            weight: "J"
          }
        ],
      },
      {
        ques: "假如你是一位老师，你会选教",
        options: [{
            text: " 以事实为主的课程",
            weight: "S"
          },
          {
            text: "涉及理论的课程",
            weight: "N"
          }
        ],
      },
      {
        ques: "你通常",
        options: [{
            text: "与人容易混熟",
            weight: "E"
          },
          {
            text: "比较沉静或矜持",
            weight: "I"
          }
        ],
      },
      {
        ques: "一般来说，你和哪些人比较合得来？",
        options: [{
            text: "富于想象力的人",
            weight: "N"
          },
          {
            text: "现实的人",
            weight: "S"
          },
        ]
      },
      {
        ques: "你是否经常让",
        options: [{
            text: "你的情感支配你的理智",
            weight: "F"
          },
          {
            text: "你的理智主宰你的情感",
            weight: "T"
          },
        ]
      },
      {
        ques: "处理许多事情上，你会喜欢",
        options: [{
            text: "凭兴所至行事",
            weight: "P"
          },
          {
            text: "按照计划行事",
            weight: "J"
          },
        ]
      },
      {
        ques: "你是否",
        options: [{
            text: "容易让人了解",
            weight: "E"
          },
          {
            text: "难于让人了解",
            weight: "I"
          },
        ]
      },
      {
        ques: "按照程序表做事，",
        options: [{
            text: "合你心意",
            weight: "J"
          },
          {
            text: "令你感到束缚",
            weight: "P"
          },
        ]
      },
      {
        ques: "在大多数情况下，你会选择",
        options: [{
            text: "顺其自然",
            weight: "P"
          },
          {
            text: "按程序表做事",
            weight: "J"
          },
        ]
      },
      {
        ques: "大多数人会说你是一个",
        options: [{
            text: "重视自我隐私的人",
            weight: "I"
          },
          {
            text: "非常坦率开放的人",
            weight: "E"
          },
        ]
      },
      {
        ques: "你宁愿被人认为是一个",
        options: [{
            text: "实事求是的人",
            weight: "S"
          },
          {
            text: "机灵的人",
            weight: "N"
          },
        ]
      },
      {
        ques: "在一大群人当中，通常是",
        options: [{
            text: "你介绍大家认识",
            weight: "E"
          },
          {
            text: "别人介绍你",
            weight: "I"
          },
        ]
      },
      {
        ques: "你会跟哪些人交朋友？",
        options: [{
            text: "常提出新主意的",
            weight: "N"
          },
          {
            text: "脚踏实地的",
            weight: "S"
          },
        ]
      },
      {
        ques: "你倾向",
        options: [{
            text: "重视感情多于逻辑",
            weight: "F"
          },
          {
            text: "重视逻辑多于感情",
            weight: "T"
          },
        ]
      },
      {
        ques: "你比较喜欢",
        options: [{
            text: "坐观事情发展才作计划",
            weight: "P"
          },
          {
            text: "很早就作计划",
            weight: "J"
          },
        ]
      },
      {
        ques: "你喜欢花很多的时间",
        options: [{
            text: "一个人独处",
            weight: "I"
          },
          {
            text: "和别人在一起",
            weight: "E"
          },
        ]
      },
      {
        ques: "与很多人一起会",
        options: [{
            text: "令你活力倍增",
            weight: "E"
          },
          {
            text: "常常令你心力憔悴",
            weight: "I"
          },
        ]
      },
      {
        ques: "哪些人会更吸引你？",
        options: [{
            text: "一个思想敏捷非常聪颖的人",
            weight: "N"
          },
          {
            text: "实事求是，具丰富常识的人",
            weight: "S"
          },
        ]
      },
      {
        ques: "哪个是较高的赞誉，或许称为",
        options: [{
            text: "一贯感性的人",
            weight: "F"
          },
          {
            text: "一贯理性的人",
            weight: "T"
          },
        ]
      },
      {
        ques: "把周末期间要完成的事列成清单，这个主意会",
        options: [{
            text: "合你意",
            weight: "J"
          },
          {
            text: "使你提不起劲",
            weight: "P"
          },
        ]
      },
      {
        ques: "你能否滔滔不绝的与人聊天",
        options: [{
            text: "只限于跟你有共同兴趣的人",
            weight: "I"
          },
          {
            text: "几乎跟任何人都可以",
            weight: "E"
          },
        ]
      },
      {
        ques: "要作决定时，你认为比较重要的是",
        options: [{
            text: "据事实衡量",
            weight: "T"
          },
          {
            text: "考虑他人的感受和意见",
            weight: "F"
          },
        ]
      },
      {
        ques: "你做事多数是",
        options: [{
            text: "按当天心情去做",
            weight: "P"
          },
          {
            text: "照拟好的程序表去做",
            weight: "J"
          },
        ]
      },
      {
        ques: "你宁愿替哪一类上司（或老师）工作？",
        options: [{
            text: "天性淳良但常常前后不一的",
            weight: "T"
          },
          {
            text: "言辞尖锐但永远合乎逻辑的",
            weight: "N"
          },
        ]
      },
      {
        ques: "在社交聚会上，你会",
        options: [{
            text: "是说话很多的一个",
            weight: "E"
          },
          {
            text: "让别人多说话",
            weight: "I"
          },
        ]
      },
      {
        ques: "哪个是较高的赞誉，或许称为",
        options: [{
            text: "能干的",
            weight: "T"
          },
          {
            text: "富有同情心",
            weight: "F"
          },
        ]
      },
      {
        ques: "你通常喜欢",
        options: [{
          text: "事先安排你的社交约会",
          weight: "J"
        },
        {
          text: "随性之所至做事",
          weight: "P"
        },
        ]
      },
      {
        ques: "为乐趣而阅读时，你会喜欢",
        options: [{
          text: "奇特或创新的表达方式",
          weight: "N"
        },
        {
          text: "作者直话直说",
          weight: "S"
        },
        ]
      },

    ],
    //E,I,S,N,T,F,J,P
    chooses: {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    },
    current: 0,
    type: ""
  },
  submitTest: function() {
    wx.redirectTo({
      url: '../mbtidetail/mbtidetail?type=' + this.data.type
    })
  },
  answer: function(e) {
    var chooses = this.data.chooses;
    chooses[e.currentTarget.dataset.weight]++;
    var current = this.data.current + 1;
    this.setData({
      current: current,
      chooses: chooses
    })

    //当是最后一答时，把结果存到缓存
    var quesLength = this.data.qlibrary.length

    if (current == quesLength) {
      this.getRes()
    }
  },
  getRes() {

    var chooses = this.data.chooses;
    var type = "";
    type = chooses.E >= chooses.I ? type + "E" : type + "I"
    type = chooses.S >= chooses.N ? type + "S" : type + "N"
    type = chooses.T >= chooses.F ? type + "T" : type + "F"
    type = chooses.J >= chooses.P ? type + "J" : type + "P"
    this.setData({
      type: type
    })
    wx.setStorageSync("mbti", {
      res: chooses,
      type: type
    })
  },

  changeResCurrent({
    detail
  }) {
    this.setData({
      rescurrent: detail.key
    });
  }
})
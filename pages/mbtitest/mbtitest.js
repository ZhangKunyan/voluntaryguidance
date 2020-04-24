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
      }
    ],
    //E,I,S,N,T,F,J,P
    chooses: {
      E:0,
      I:0,
      S:0,
      N:0,
      T:0,
      F:0,
      J:0,
      P:0,
    },
    current: 0,
    type:""
  },
  submitTest: function() {
    wx.redirectTo({
      url: '../mbtidetail/mbtidetail?type='+this.data.type
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
  getRes(){

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
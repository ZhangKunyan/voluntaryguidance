Page({

  data: {
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
      E: 1,
      I: 2,
      S: 3,
      N: 4,
      T: 5,
      F: 6,
      J: 1,
      P: 10,
    },
    current: 10
  },
  answer: function(e) {
    var chooses = this.data.chooses;
    chooses[e.currentTarget.dataset.weight]++;
    this.setData({
      current: this.data.current + 1,
      chooses: chooses
    })
  }
})
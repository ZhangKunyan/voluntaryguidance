// pages/mbtidetail/mbtidetail.js
Page({


  data: {
    btntext: '确定',
    type: "",
    res: {
      ISTJ: {
        desc: "1",
        text: "    严肃、安静、借由集中心 志与全力投入、及可被信赖获致成功;行事务实、有序、实际、逻辑、真实及可信赖;十分留意且乐于任何事（工作、居家、生活均有良好组织及有序);负责任;照设定成效来做出决策且不畏阻挠与闲言会坚定为之;重视传统与忠诚;传统性的思考者或经理。",
        majors: ["计算机类", "会计类", "工程审计类","经济学类"]
      },
      ISFJ: {
        desc: "2",
        text: "    安静、和善、负责任且有良心;行事尽责投入;安定性高，常居项目工作或团体之安定力量;愿投入、吃苦及力求精确;兴趣通常不在于科技方面，对细节事务有耐心;忠诚、考虑周到、知性且会关切他人感受;致力于创构有序及和谐的工作与家庭环境。",
        majors: ["管理类", "土建施工类", "建筑设计类","建筑工程管理类","房地产类"]
      },
      INFJ: {
        desc: "3",
        text: "    因为坚忍、创意及必须达成的意图而能成功; 会在工作中投注最大的努力;默默强力的、诚挚的及用心的关切他人; 因坚守原则而受敬重;提出造福大众利益的明确远景而为人所尊敬与追随;追求创见、关系及物质财物的意义及关联;想了解什么能激励别人及对他人具洞察力;光明正大且坚信其价值观;有组织且果断地履行其愿景。",
        majors: ["销售类", "工商管理类", "艺术设计类"]
      },
      INTJ: {
        desc: "4",
        text: "    具强大动力与本意来达成目的与创意—固执顽固者;有宏大的愿景且能快速在众多外界事件中找出有意义的模范;对所承负职务，具良好能力于策划工作并完成;具怀疑心、挑剔性、独立性、果决，对专业水准及绩效要求高。",
        majors: ["金融类", "经济与贸易类", "电子信息类"]
      },
      ISTP: {
        desc: "5",
        text: "    冷静旁观者—安静、预留余地、弹性及会以无偏见的好奇心与未预期原始的幽默观察与分析;有兴趣于探索原因及效果，技术事件是为何及如何运作且使用逻辑的原理组构事实、重视效能;擅长于掌握问题核心及找出解决方式;分析成事的缘由且能实时由大量资料中找出实际问题的核心。",
        majors: ["计算机类", "电子信息类", "经济类","金融类"]
      },
      ISFP: {
        desc: "6",
        text: "    羞怯的、安宁和善地、敏感的、亲切的、且行事谦虚;喜于避开争论，不对他人强加已见或价值观;无意于领导却常是忠诚的追随者;办事不急躁，安于现状无意于以过度的急切或努力破坏现况，且非成果导向;喜欢有自有的空间及照自订的时程办事。",
        majors: ["政治学类", "旅游管理类", "艺术设计类"]
      },
      INFP: {
        desc: "7",
        text: "    安静观察者，具理想性与对其价值观及重要之人具忠诚心;希外在生活形态与内在价值观相吻合;具好奇心且很快能看出机会所在，常担负开发创意的触媒者;除非价值观受侵犯，行事会具弹性、适应力高且承受力强;具想了解及发展他人潜能的企图，想作太多且作事全神贯注;对所处境遇及拥有不太在意;具适应力、有弹性除非价值观受到威胁。",
        majors: ["新闻传播类", "人力资源管理类", "艺术管理类"]
      },
      INTP: {
        desc: "8",
        text: "    安静、自持、弹性及具适应力;特别喜爱追求理论与科学事理;习于以逻辑及分析来解决问题—问题解决者;最有兴趣于创意事务及特定工作，对聚会与闲聊无大兴趣;追求可发挥个人强烈兴趣的生涯;追求发展对有兴趣事务之逻辑解释。",
        majors: ["软件设计类", "金融类", "法学类"]
      },
      ESTP: {
        desc: "9",
        text: "    擅长现场实时解决问题—解决问题者;喜欢办事并乐于其中及过程;倾向于喜好技术事务及运动，交结同好友人;具适应性、容忍度、务实性；投注心力于会很快具 成效工作;不喜欢冗长概念的解释及理论;最专精于可操作、处理、分解或组合的真实事务。",
        majors: ["财经商贸类", "工商管理类", "金融类"]
      },
      ESFP: {
        desc: "10",
        text: "外向、和善、接受性、乐于分享喜乐予他人;喜欢与他人一起行动且促成事件发生，在学习时亦然;知晓事件未来的发展并会热列参与;最擅长于人际相处能力及具备完备常识，很有弹性能立即 适应他人与环境;对生命、人、物质享受的热爱者。",
        majors: ["表演类", "旅游管理类", "教育类"]
      },
      ENFP: {
        desc: "11",
        text: "充满热忱、活力充沛、聪明的、富想象力的，视生命充满机会但期能得自他人肯定与支持;几乎能达成所有有兴趣的事;对难题很快就有对策并能对有困难的人施予援手;依赖能改善的能力而无须预作规划准备;为达目的常能找出强制自己为之的理由;即兴执行者。",
        majors: ["市场营销类", "新闻传播类", "法学类","环境科学类"]
      },
      ENTP: {
        desc: "12",
        text: "反应快、聪明、长于多样事务;具激励伙伴、敏捷及直言讳专长;会为了有趣对问题的两面加予争辩;对解决新及挑战性的问题富有策略，但会轻忽或厌烦经常的任务与细节;兴趣多元，易倾向于转移至新生的兴趣;对所想要的会有技巧地找出逻辑的理由;长于看清础他人，有智能去解决新或有挑战的问题。",
        majors: ["金融类", "营销策划类", "系统开发类"]
      },
      ESTJ: {
        desc: "13",
        text: "务实、真实、事实倾向，具企业或技术天份;不喜欢抽象理论，最喜欢学习可立即运用事理;喜好组织与管理活动且专注以最有效率方式行事以达致成效;具决断力、关注细节且很快作出决策—优秀行政者;会忽略他人感受;喜作领导者或企业主管。",
        majors: ["电子信息技术类", "经济金融类", "工商管理类"]
      },
      ESFJ: {
        desc: "14",
        text: "诚挚、爱说话、合作性高、受欢迎、光明正大的—天生的合作者及活跃的组织成员; 重和谐且长于创造和谐;常作对他人有益事务;给予鼓励及称许会有更佳工作成效;最有兴趣于会直接及有形影响人们生活的事务;喜欢与他人共事去精确且准时地完成工作。 ",
        majors: ["营销类", "人力资源管理类", "经济与金融类"]
      },
      ENFJ: {
        desc: "15",
        text: "热忱、易感应及负责任的--具能鼓励他人的领导风格;对别人所想或希求会表达真正关切且切实用心去处理;能怡然且技巧性地带领团体讨论或演示文稿提案;爱交际、受欢迎及富同情心;对称许及批评很在意;喜欢带引别人且能使别人或团体发挥潜。",
        majors: ["计算机类", "销售类", "新闻类","旅游管理类"]
      },
      ENTJ: {
        desc: "16",
        text: "坦诚、具决策力的活动领导者;长于发展与实施广泛的系统以解决组织的问题;专精于具内涵与智能的谈话如对公众演讲;乐于经常吸收新知且能广开信息管道;易生过度自信，会强于表达自已创见;喜于长程策划及目标设定。",
        majors: ["软件类", "国际销售类", "技术培训类"]
      },
    },
    majorsSelected:[]
  },

  onLoad: function(options) {
    this.setData({
      type: options.type
    })
  },

  selectLikeMajors({ detail = {} }) {
    var majorsSelected = this.data.majorsSelected
    const index = majorsSelected.indexOf(detail.value);
    index === -1 ? majorsSelected.push(detail.value) : majorsSelected.splice(index, 1);
    this.setData({
      majorsSelected: majorsSelected
    });
  },

  submit(){
    //TODO：提交后端
   // 暂时存缓存
    var mbti = wx.getStorageSync("mbti")
    mbti["majors"] = this.data.majorsSelected
    wx.setStorageSync("mbti", mbti)

    var steps = []
    steps = wx.getStorageSync("steps");
    if (steps) {

    } else {
      steps = [2, 2, 2]
    }
    steps[1] = 0;
    steps[2] = 1;
    wx.setStorageSync("steps", steps)

    wx.showModal({
      title: '提示',
      content: 'MBTI测试完成',
      showCancel:false,
      success(res) {
        wx.switchTab({
          url: '../../pages/index/index'
        })
      }
    })
  }


})
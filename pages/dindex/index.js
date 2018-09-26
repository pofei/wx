Page({

  data: {
    banner: [
      { imgPath: '../image/banner/cropper.jpg' },
      { imgPath: '../image/banner/cropper.jpg' },
      { imgPath: '../image/banner/cropper.jpg' }
    ],
    dynamic: [
      {
        username: '陈新', userpath: '../image/user/user.jpg',
        title: '永远的七日之都1', description: '这是简介...',
        images: ['../image/banner/cropper.jpg', '../image/banner/cropper.jpg', '../image/banner/cropper.jpg'], labels: ['绘画区', '绘画', '凯莉', '凹凸世界'],
        admirecount: 33, commentcount: 103, colcount: 5
      },
      {
        username: '陈新2', userpath: '../image/user/user.jpg',
        title: '感同身受', description: '这是简介2...',
        images: ['../image/banner/cropper.jpg', '../image/banner/cropper.jpg', '../image/banner/cropper.jpg'], labels: ['绘画区', '绘画', '凯莉', '凹凸世界'],
        admirecount: 33, commentcount: 103, colcount: 5
      }
    ],
    page: 0,
    list: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    testData:[{
      userId: 2,
      username: '陈新',
      gender: '女',
      dubbingWorkId: 2,
      title: '标题',
      topicId: '',
      topicName: '',
      description: 'xxxx',
      coverPath: '',
      admireCount: 4,
      commentCount: 3 ,
      collectCount: 1
    }, {
      userId: 2,
      username: '陈新',
      gender: '女',
      dubbingWorkId: 2,
      title: '标题',
      topicId: '',
      topicName: '',
      description: 'xxxx',
      coverPath: '',
      admireCount: 4,
      commentCount: 3,
      collectCount: 1
      }, {
        userId: 2,
        username: '陈新',
        gender: '女',
        dubbingWorkId: 2,
        title: '标题',
        topicId: '',
        topicName: '',
        description: 'xxxx',
        coverPath: '',
        admireCount: 4,
        commentCount: 3,
        collectCount: 1
    }, {
      userId: 2,
      username: '陈新',
      gender: '女',
      dubbingWorkId: 2,
      title: '标题',
      topicId: '',
      topicName: '',
      description: 'xxxx',
      coverPath: '',
      admireCount: 4,
      commentCount: 3,
      collectCount: 1
    },{
      userId: 2,
      username: '陈新',
      gender: '女',
      dubbingWorkId: 2,
      title: '标题',
      topicId: '',
      topicName: '',
      description: 'xxxx',
      coverPath: '',
      admireCount: 4,
      commentCount: 3 ,
      collectCount: 1
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var weSwiper = require('../../pages/dist/weSwiper/weSwiper.js');
    new weSwiper({
      slideLength: 3  // 必填，由于目前无法直接获取slide页数，目前只能通过参数写入
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log(2);
    wx.showNavigationBarLoading();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  loadMore: function () {
    // wx.showNavigationBarLoading();
    var that = this;
    var page = that.data.page;
    var list = that.data.list;
    var testData = that.data.testData;
    for (var i=0;i<5;i++){
      list.push({ id: list.length + i });
    }


    wx.request({
      url: 'https://www.fengyugo.com/management/queue/papa', //仅为示例，并非真实的接口地址
      data: {
        userId: '14546'
      },
      success: function (res) {
        for(var i=0;i<res.data.length;i++){
          testData.push({
            userId: res.data[i].userId,
            username: res.data[i].username,
            gender: res.data[i].gender,
            dubbingWorkId: res.data[i].dubbingWorkId,
            title: res.data[i].title,
            topicId: res.data[i].topicId,
            topicName: res.data[i].topicName,
            description: res.data[i].description,
            coverPath: res.data[i].coverPath,
            admireCount: res.data[i].admireCount,
            commentCount: res.data[i].commentCount,
            collectCount: res.data[i].collectCount
          });

          that.setData({
            testData: testData
          });


        }
      }
    })



    page++;

    // wx.hideNavigationBarLoading();
  },
  refresh: function () {
    console.log("刷新");

  }


})
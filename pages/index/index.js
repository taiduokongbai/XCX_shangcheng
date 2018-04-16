//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
'https://img.alicdn.com/bao/uploaded/i2/3014361455/TB1fMR5fgfH8KJjy1zcXXcTzpXa_!!0-item_pic.jpg_b.jpg',
'https://img.alicdn.com/bao/uploaded/i1/1848910522/TB2pRY9hnnI8KJjy0FfXXcdoVXa_!!1848910522.jpg_b.jpg',
'https://img.alicdn.com/bao/uploaded/i2/2811105799/TB1ulhOarsTMeJjy1zbXXchlVXa_!!0-item_pic.jpg_b.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    couponList: [
      {
        id:1001,
        amount: 20,
        conditionAmount: 128,
        currency: "RMB"
      },
      {
        id: 1001,
        amount: 20,
        conditionAmount: 128,
        currency: "RMB"
      },
      {
        id: 1001,
        amount: 20,
        conditionAmount: 128,
        currency: "RMB"
      },
    ]
  },
 onLoad: function(){

 }
  // data: {
  //   motto: 'Hello World',
  //   userInfo: {},
  //   hasUserInfo: false,
  //   canIUse: wx.canIUse('button.open-type.getUserInfo')
  // },
  // //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})

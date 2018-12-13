// pages/exam01/exam01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:""
  },
  selectoVideo:function(){
    //选择相册中视频在标签中播放！！真机测
    wx.chooseVideo({
      sourceType:["album","camera"],
      maxDuration:60,
      camrera:["front","back"],//相册前后摄像头
      success:(res)=>{
        //相册中指定视频路径
        var path = res.tempFilePath;
        this.setData({src:path});
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
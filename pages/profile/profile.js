// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic:false//当前音乐是否正在播放
  },
  onMusicTap:function(){
    //获取当前音乐的状态 true 播放 false暂停
    var isp = this.data.isPlayingMusic;
    if(isp){
      //暂停背景音乐
      wx.pauseBackgroundAudio()
      this.setData({
        isPlayingMusic: false
      })
      
    }else{
      //播放背景音乐
      wx.playBackgroundAudio({
        dataUrl: "http://localhost:3000/img/bg.mp3",
        title: "...",
      })
      this.setData({isPlayingMusic:true})
    }
    
    
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
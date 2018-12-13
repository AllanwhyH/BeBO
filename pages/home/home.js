// pages/home/home.js
Page({
  handleTap01:function(){
    wx.request({
      url:"http://localhost:3000/imageList",
      success:(res)=>{
        //console.log(res)
        this.setData({
          imgs:res.data.obj,
          list:res.data.list
        })
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    imgs: [],
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  /*getImageList 获取数据*/
  /*在onLoad 调用*/
  onLoad: function (options) {
    this.handleTap01();
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

  },

  handleJumpNews:function(event){
    var id = event.target.dataset.id;
    //console.log(event)
    if(id == 1){
      wx.navigateTo({
        url:"/pages/news/news"
      })
    }
  }
})
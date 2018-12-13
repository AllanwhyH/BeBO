// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],  //商品列表
    pageIndex:0,//分页的页码
    pageSize:6,  //页大小
    hasMore:true //是否还有更多的数据
  },
  loadMore:function(){
    //判断下一页数据
    if(this.data.hasMore == false)return;
    //加载更多的数据
    //1.发送ajax请求
    wx.request({
      url:"http://localhost:3000/newslist",
      data:{
        pno:++this.data.pageIndex,
        pageSize:this.data.pageSize},
      success:(result)=>{
        //console.log("总页数"+result.data.pageCount)
        //console.log("当前页内容")
        //console.log("总页数" + result.data.data)
        //2.获取返回数据
        //3.保存到list列表中
        var list = this.data.list.concat(
          result.data.data
        )
        //总页数
        var pageCount = result.data.pageCount;
        //当前页
        var pno = this.data.pageIndex;
        //当前页内容
        var data = result.data.data;
        //是否还有下一页判断条件  
        var flag = pno < pageCount;
        this.setData({
          list:list,
          hasMore:flag,
          pageIndex:pno
        })
        
      }
    })
    /*在loadMore方法最后添加动画效果*/
    /*1.显示加载动画*/
    wx.showLoading({
      title: "现在加载数据..."
    });
    /*2:1秒后隐藏动画*/
    setTimeout(function () {
      wx.hideLoading();
    },1000)
    
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
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
    console.log(111)
    this.loadMore();
    console.log(this.data.pageIndex)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
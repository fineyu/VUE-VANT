<template>
  <div class="hello">
    <!-- 跳转 -->
    <router-link tag="div" class="header" to="/login">welcome to demo>></router-link>
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in items"> <img :src="item.bannerPic" alt=""> </van-swipe-item>
    </van-swipe>
    <!-- 底部栏 -->
    <van-tabbar v-model="active" active-color="rosybrown">
      <van-tabbar-item icon="home-o" >首页</van-tabbar-item>
      <van-tabbar-item icon="search" dot  to="/search">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o" :info="friend"  to="/friend">朋友圈</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20"  to="/set">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      friend:14,
      active: 0,
      msg:"这里是msg",
      items:[
        {bannerPic:require("../assets/images/pic.jpg")},
        {bannerPic:require("../assets/images/pic.jpg")},
        {bannerPic:require("../assets/images/pic.jpg")},
      ],
    }
  },
  methods: {
    routerSearch(){
      alert("13")
      this.$router.push({
        name:"search",
      })
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="less" >
    .header{
      width: 100%;
      height: 60px;
      background-color: rosybrown;
      text-align: center;
      line-height: 60px;
      font-size:22px 
    }
    .van-swipe{
      width: 100%;
      height: 250px;
      img{
        width: 100%;
        height: 250px;
      }
    }

</style>

<template>
    <div  class="search">
        <!-- 顶部栏 -->
        <van-nav-bar title="搜索页面" left-text="返回" left-arrow  @click-left="onClickLeft"  @click-right="onClickRight">
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        <!-- 搜索栏 -->
        <van-search placeholder="请输入搜索关键词" v-model="value" />
        <!-- 底部栏 -->
        <van-tabbar v-model="active" active-color="rosybrown">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" dot >搜索</van-tabbar-item>
            <van-tabbar-item icon="friends-o" :info="friend" to="/friend">朋友圈</van-tabbar-item>
            <van-tabbar-item icon="setting-o" info="20"  to="/set">设置</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data () {
        return {
            friend:14,
            active:1,
            value:"",
        }
    },
    methods: {
        onClickLeft(){
            alert('返回');
        },
        onClickRight(){
            alert('搜索');
        }
    }

}
</script>


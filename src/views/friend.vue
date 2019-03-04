<template>
    <div class="friend">
        <div class="header"><span>{{msg}}</span></div>
        <van-notice-bar
        text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
        left-icon="volume-o"/>        
        <!-- 底部栏 -->
        <van-tabbar v-model="active" active-color="rosybrown">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" dot  to="/search">搜索</van-tabbar-item>
            <van-tabbar-item icon="friends-o" :info="friend" >朋友圈</van-tabbar-item>
            <van-tabbar-item icon="setting-o" info="20"  to="/set">设置</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg:"朋友圈友情提醒",
            active:2,
            friend:14,
        }
    }

}
</script>
<style scoped lang="less" >
    .header{
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: darkcyan;
        text-align: center;
        span{
        width: 100%;
        color:#fff;
        font-size: 18px;
        }
    }
</style>



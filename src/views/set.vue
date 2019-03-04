<template>
    <div class="set">
        <div ref="main" class="can"></div>
        <!-- 底部栏 -->
        <van-tabbar v-model="active" active-color="rosybrown">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" dot  to="/search">搜索</van-tabbar-item>
            <van-tabbar-item icon="friends-o" :info="friend"  to="/friend">朋友圈</van-tabbar-item>
            <van-tabbar-item icon="setting-o" info="20" >设置</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

    
export default {
    name:'set',
    data () {
        return {
            friend:14,
            active:3,
        }
    },
    methods: {
       

    },
    // 在html渲染之前加载
    created () {
        
    },

    
    // 在html渲染之后加载
    mounted () {
        // this.$nextTick是以防万一在加载完html之后操作dom
        this.$nextTick(()=>{
            var myChart = this.$echarts.init(this.$refs.main);
            myChart.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        })
    }
}
</script>

<style scoped lang="less">
    .set{
        .can{
            width: 100vw;
            height: 500px;
        }
    }
    
</style>


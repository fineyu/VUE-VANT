<template>
    <div class="register">
        <p>欢迎进入注册页面</p>
        <van-cell-group>
        <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('请填写真实姓名')"
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />

        <van-field
            v-model="sms"
            center
            clearable
            label="短信验证码"
            placeholder="输入验证码"
            required
        >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>

        </van-cell-group>
        
        <button class="login" @click="login">注册</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username:"",
            password:"",
            sms:""
        }
    },
    methods: {
        login(){
            this.$router.push({
                name:'HelloWorld',
                params:{
                    id:2
                }
            })
        }
    }
}
</script>

<style scoped lang="less">
    p{
        font-size: 26px;
        text-align: center;
        background-color: rgb(228, 123, 49);
        width: 100%;
        height: 100px;
        line-height: 100px;
        margin: 0;
    }
    .van-cell-group{
        width: 80% !important;
        margin:50px auto 0 auto!important;
      .van-cell{
          border-bottom: 1px solid #eee;
      }
    }
    .login{
        display: block;
        width:100px;
        height: 35px;
        line-height: 30px;
        border: 1px solid rgb(60, 197, 119);
        border-radius: 10px;
        margin:25px auto;
        font-size: 16px;
        color: #fff;
        background-color: rgb(60, 197, 119);
    }
</style>


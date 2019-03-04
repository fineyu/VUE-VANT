<template>
    <div class="login">
        <p>欢迎进入登录页面</p>
        <van-cell-group>
        <van-field
            v-model="phone"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
        />

        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
        />
        </van-cell-group>
        <span @click="register">欢迎注册>></span>
        <button class="login1" @click="login">登录</button>
    </div>
</template>

<script>
export default {
    name:"login",
    data () {
        return {
            phone:"",
            password:"",
        }
    },
    methods: {
        register(){
            this.$router.push({
                name:"register",
                params:{
                    id:1
                }
            })
        },
        login(){
            alert("点击了登录")
            var phone=this.phone;
            var password=this.password;
            this.$post('/api/login',{ phone: phone, password: password }).then((response) => {
                console.log(response)
                this.$router.push({
                    name:'HelloWorld'
                })
            },(err)=>{
                console.log(err)
            })
        }
    },
    mounted () {
        
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
    span{
        display: block;
        margin: auto;
        float: right;
        font-size: 14px;
        color: #999;
        margin-right: 10%;
        margin-top: 10px;
    }
    .login1{
        display: block;
        width:100px;
        height: 35px;
        line-height: 30px;
        border: 1px solid rgb(60, 197, 119);
        border-radius: 10px;
        margin: 55px 37%;;
        font-size: 16px;
        color: #fff;
        background-color: rgb(60, 197, 119);
    }
</style>


<template>
    <div class="layout">
        <form v-if="isLog" class="box">
            <h4>欢迎登录</h4>

            <div class="con"><span>用户名：</span><input type="text" v-model="name"></div>
            <div class="con"><span>密码： </span><input type="password" v-model="password"></div>

            <div class="footer"><button class="btn1" :class="{active: isLog===true}" type="button" @click="log()">登录</button>
                <button type="button" @click="reg()">注册</button></div>
        </form>
        <form  v-else class="box">
            <h4>欢迎注册</h4>
            <div class="con">用户名：<input type="text" v-model="name"></div>
            <div class="con">密码： <input type="password" v-model="password"></div>
            <div class="con"> 再次输入： <input type="password" v-model="repeat"></div>
            <div class="footer"><button type="button" class="btn1 active"  @click="addUser()">确定</button>
                <button type="button" @click="cancel()">取消</button></div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return{
                isLog: true,
                name: '',
                password: '',
                repeat: ''
            }
        },
        methods: {
            log() {
                if(localStorage.getItem("name") === this.name && localStorage.getItem("password") === this.password){
                    this.$router.push('/home/list')
                    this.name = ''
                    this.password = ''
                }else {
                    alert("账号密码错误")
                }
            },
            reg() {
                this.isLog = false
            },
            cancel() {
                this.isLog = true
            },
            addUser() {
                if(this.password===this.repeat){
                    localStorage.setItem("name",this.name)
                    localStorage.setItem("password",this.password)
                    this.name = ''
                    this.password = ''
                    this.isLog = true
                }else {
                    alert("两次密码不一致")
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .layout{
        margin: 0 5%;
    }
    .box{
        margin-top: 30px;
        line-height: 30px;
    }
    .con{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 50px;

    }
    .con input{
        width: 70%;
        border: 1px solid #42b983;
        height: 30px;
        border-radius: 2px;
    }
    .footer button{
        margin-top: 10px;
        width: 48%;
        height: 30px;
        line-height: 30px;
        border-radius: 2px;
        border: 1px solid #42b983;
        background-color: #fff;
    }
    .btn1{
        margin-right: 4%;
    }
    .active{
        color: #fff;
        background-color: #42b983 !important;
    }
</style>

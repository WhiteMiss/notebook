<template>
<div>
    <form   v-if="!isReg">
        用户名：
        <input type="text" v-model="name">

        密码：
        <input type="password" v-model="password" >
        <button type="button" @click="login()">登录</button>
        <button type="button" @click="reg()">注册</button>
    </form>

    <form  v-else>
        <div>用户名：</div>
        <input type="text" v-model="name">
        <div>密码：</div>
        <input type="password" v-model="password">
        <div>再次输入密码:</div>
        <input type="password" v-model="repeat">
        <button type="button" @click="addUser()">确认</button>
        <button type="button" @click="cancel()">取消</button>
    </form>
</div>
</template>

<script>
    import Info from "./Info";
    export default {
        name: "Login",
        data () {
            return {
                isReg :false,
                name:'',
                password:'',
                repeat:''
            }
        },
        components: {Info},
        methods: {
            login(){
                this.$router.push('/home/list')
            },
            reg(){
                this.isReg = true
            },
            cancel(){
                this.isReg = false
            },
            addUser(){
                if(this.password === this.repeat){
                    localStorage.setItem("name",this.name)
                    localStorage.setItem("password",this.password)
                }
                 else{
                     alert('输入密码不一致')
                }
            }


        }
    }
</script>

<style scoped>

</style>

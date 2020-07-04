<template>
<div>
    <form action=""  v-if="">
        用户名：
        <input type="text">

        密码：
        <input type="text">
        <button type="button" @click="reg()">登录</button>
        <button type="button" @click="reg1()">注册</button>
    </form>

    <form action="">
        用户名：
        <input type="text">

        密码：
        <input type="text">
        再次输入密码
        <input type="text">
        <button type="button" @click="reg()">登录</button>
        <button type="button" @click="reg1()">注册</button>
    </form>
</div>
</template>

<script>
    import Info from "./Info";
    export default {
        name: "Login",
        components: {Info},
        methods: {
            reg(){
                this.$router.push('/home/list')
            },
            reg1(){
                this.$router.push('/home/user')
            }

        }
    }
</script>

<style scoped>

</style>

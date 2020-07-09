<template>
    <div class="box">
        <router-link :to="{name: 'add'}">
            <span>添加</span>
        </router-link>
        <span @click="logout()">登出</span>
    </div>
</template>

<script>
    export default {
        name: 'User',
        methods:{
            logout(){
                localStorage.removeItem("name")
                localStorage.removeItem("password")
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    .box span{
        /*display: flex;*/
        /*align-content: center;*/
        /*justify-content: center;*/
        display: block;
        margin: 50px auto;
        width: 50px;
        height: 30px;
        background-color: #42b983;
        line-height: 30px;
        text-align: center;
        border-radius: 2px;
        color: #fff;
    }
</style>

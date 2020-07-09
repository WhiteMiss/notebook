<template>
    <div class="box">
        <div>
            <h3>{{info.title}}</h3>
            <p>{{info.content}}</p>
        </div>
        <div class="btn" @click="back()">返回</div>
    </div>
</template>

<script>
    import store from "../store/index.js";
    export default {
        name: 'Info',
        store,
        computed: {
            info () {
                return store.state.lists[store.state.index]
            }
        },
        methods:{
            back(){
                this.$router.push("/home/list")
            }
        }
    }
</script>

<style scoped>
    .box{
        margin: 20px 5%;
    }
    .box div{
        /*border: 1px solid #ccc;*/
        border-radius: 2px;
        line-height: 30px;
        margin: 20px 0;
        padding: 10px;
    }
    .box h3{
        border-bottom: 1px solid #ccc;
        height: 30px;
    }
    .btn{
        height: 30px;
        background-color: #42b983;
        color: #fff;
        border-radius: 2px;
        text-align: center;
    }
</style>

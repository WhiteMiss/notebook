<template>
    <div class="box">
        <p>标题</p>
        <input  class="tit" type="text" v-model="title">
        <p>内容</p>
        <textarea  class="con" type="text" v-model="content"/>
        <!--        <div class="btn" @click="add()">添加</div>-->
        <div class="footer"><button type="button" class="btn1 active"  @click="add()">确定</button>
            <button type="button" @click="cancel()">取消</button></div>
    </div>
</template>

<script>
    import  store from '../store/index.js'
    export default {
        name: 'Add',
        data () {
            return {
                title: '',
                content: ''
            }
        },
        methods: {
            add () {
                store.commit('addItem',{
                    title: this.title,
                    content: this.content
                })
                this.title = ''
                this.content = ''
                this.$router.push('/home/list')
            },
            cancel() {
                this.$router.push('/home/user')
            }
        }
    }
</script>

<style scoped>
    .box{
        margin: 0 5%;
    }
    .box p{
        margin-top: 20px;
    }
    .box input{
        border-radius: 2px;
        border: 1px solid #42b983;
    }
    .tit{
        width: 100%;
        height: 30px;
    }
    .con{
        border-radius: 2px;
        border: 1px solid #42b983;
        width: 100%;
        height: 200px;
    }
    .footer button{
        margin-top: 30px;
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

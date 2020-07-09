<template>
    <div>
        <ul  class="box">
            <li v-for="(item,index) in pageList" :key="index"  @click="choose(index)" :class="{active: index == current && current !== ''}">
                <div>
                    <h3>{{item.title}}</h3>
                    <p>{{item.content}}</p>
                    <p>{{time | formatDate}}<span @click="toInfo(index)" class="detail">查看详情</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import store from "../store/index.js";
    export default {
        name: 'List',
        store,
        computed: {
            pageList () {
                return store.state.lists
            }
        },
        data(){
            return{
                current: '',
                time:Date.parse(new Date())
            }
        },
        //时间戳
        filters: {
            formatDate(value){
                let date = new Date(value);
                let y = date.getFullYear();
                let MM = date.getMonth() + 1;
                MM = MM < 10 ? ('0' + MM) : MM;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                let h = date.getHours();
                h = h < 10 ? ('0' + h) : h;
                let m = date.getMinutes();
                m = m < 10 ? ('0' + m) : m;
                let s = date.getSeconds();
                s = s < 10 ? ('0' + s) : s;
                return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
            }
        },
        methods: {
            choose(index) {
                this.current = index
                console.log(index,this.current)
            },
            toInfo(index){
                store.commit('setIndex',index)
                this.$router.push('/home/info')
            }
        }
    }
</script>

<style scoped>
    .box {
        margin: 20px 5%;
    }
    .box li{
        border: 1px solid #ccc;
        border-radius: 2px;
        line-height: 30px;
        margin: 20px 0;
        padding: 10px;
    }
    .box h3{
        border-bottom: 1px solid #ccc;
        height: 30px;
    }
    li.active{
        background-color: #42b983;
        color: #fff;
    }
    .detail{
        float: right;
    }
</style>

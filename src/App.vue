<template>
    <div id="app">
        <router-view/>

    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    *{
        padding: 0;
        margin: 0;
    }
    li {
        list-style: none;
    }
</style>
<script>
    export default {



        /* mounted(){
           // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
           window.onbeforeunload = function (e) {
             var storage = window.localStorage;
             storage.clear()
           }
         }
     */

    };
</script>


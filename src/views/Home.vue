<template>
    <div>
        <router-view/>
        <ul class="footer">
            <li class="icons"><router-link :to="{name: 'list'}">新闻中心</router-link></li>
            <li class="icons"><router-link :to="{name: 'user'}">个人中心</router-link></li>
        </ul>
    </div>
</template>
<style scoped lang="scss">
    li{
    list-style: none;
    }
.footer
{
    position: fixed;

    width: 100%;
    height: 60px;
    line-height: 60px;
    left: 0;
    bottom: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;

}
.icons{
    font-size: 16px;
    flex: 1;
    text-align: center;
    border-top: 1px solid deepskyblue;
    a{
        color: deepskyblue;
        display: block;
    }
}
</style>

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children:[
      {
        path:'list',
        name:'list',
        component:  () => import(/* webpackChunkName: "list" */ '../views/List.vue')
      },
      {
        path:'user',
        name:'user',
        component:  () => import(/* webpackChunkName: "user" */ '../views/User.vue')
      }
    ]
  },
  {
    path: '/add',
    name: 'add',
    component: ()  => import(/* webpackChunkName: "add" */ '../views/Add.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkAtiveClass:'active',
  routes
})

export default router

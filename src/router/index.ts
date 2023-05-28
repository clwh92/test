import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'
import FulleScreen from '../components/fullScreen.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'FulleScreen',
    redirect: '/home',
    component: FulleScreen
  },
  {
    path: '/home',
    name: 'Home',
    // component: Home
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].directive) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/router1',
    name: 'router1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].directive) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/router1.vue')
  },
  {
    path: '/router2',
    name: 'router2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].directive) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../components/router2.vue'),
      help: () => import('../components/help.vue')
    },
    redirect: '/router2/temp1', // 默认打开第一个嵌套路由
    children: [
      {
        path: '/router2/temp1',
        component: () => import('../components/s1.vue')
      },
      {
        path: '/router2/temp2',
        component: () => import('../components/HelloWorld.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

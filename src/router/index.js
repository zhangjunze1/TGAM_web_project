import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/driver',
        name: 'Driver',
        component: () => import(/* webpackChunkName: "about" */ '../views/Information/Driver.vue')
      }, {
        path: '/car',
        name: 'Car',
        component: () => import(/* webpackChunkName: "about" */ '../views/Information/Car.vue')
      }, {
        path: '/place',
        name: 'Place',
        component: () => import(/* webpackChunkName: "about" */ '../views/Information/Place.vue')
      }, {
        path: '/data',
        name: 'Data',
        component: () => import(/* webpackChunkName: "about" */ '../views/Controller/Data.vue')
      }, {
        path: '/record',
        name: 'Record',
        component: () => import(/* webpackChunkName: "about" */ '../views/Controller/Record.vue')
      }, {
        path: '/host',
        name: 'Host',
        component: () => import(/* webpackChunkName: "about" */ '../views/Host.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

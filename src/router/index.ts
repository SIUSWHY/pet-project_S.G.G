import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/index.vue'
import Hades from '@/components/Pages/Hades/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/bastion',
    name: 'Bastion',
    component: Home
  },
  {
    path: '/transistor',
    name: 'Transistor',
    component: Home
  },
  {
    path: '/pyre',
    name: 'Pyre',
    component: Home
  },
  {
    path: '/hades',
    name: 'Hades',
    component: () => import('@/components/Pages/Hades/index.vue'),
    children: [
      {
        path: 'ambrosia',
        // component: () => import('@/components/Pages/Hades/component/Ambrosia/index.vue')
      },
      {
        path: 'boons',
        component: () => import('@/components/Pages/Hades/index.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

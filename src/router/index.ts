import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/index.vue'
import Hades from '../components/Pages/Hades/index.vue'
import Ambrosia from '@/components/Pages/Hades/component/Ambrosia'

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
    component: Hades,
    children: [
      {
        path: 'ambrosia',
        component: Ambrosia
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

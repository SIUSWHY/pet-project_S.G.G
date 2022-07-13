import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/index.vue';

Vue.use(VueRouter);

const isAdmin = true;
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login/index.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/components/Dashboard/index.vue'),
    beforeEnter: (to, from, next) => {
      if (isAdmin) {
        next();
      } else {
        next('/');
      }
    },
    children: [
      {
        path: 'users',
        component: () => import('@/components/Dashboard/Component/Users/index.vue'),
      },
      {
        path: 'all',
        // component: () => import('@/components/Dashboard/index.vue'),
      },
      {
        path: 'dashboard',
        component: () => import('@/components/Dashboard/Component/Dash/index.vue'),
      },
    ],
  },
  {
    path: '/bastion',
    name: 'Bastion',
    component: Home,
  },
  {
    path: '/transistor',
    name: 'Transistor',
    component: Home,
  },
  {
    path: '/pyre',
    name: 'Pyre',
    component: Home,
  },
  {
    path: '/hades',
    name: 'Hades',
    component: () => import('@/components/Pages/Hades/index.vue'),
    children: [
      {
        path: 'ambrosia',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'boons',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'centaur_heart',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'charons_obol',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'chthonic_key',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'daedalus_hammer',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'infernal_arms',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'keepsakes',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'pom_of_power',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'titan_blood',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'darkness',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'gemstone',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'heat',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'zagreus',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'hades',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'achilles',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'megaera',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'thanatos',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'aphrodite',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'artemis',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'athena',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'hermes',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'poseidon',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'zeus',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'chaos',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'theseus',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'nyx',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'ares',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
      {
        path: 'all_characters',
        component: () => import('@/components/Pages/Hades/index.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

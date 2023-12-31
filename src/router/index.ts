import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
const Demo1 = () => import('../views/demo1.vue')
const Demo2 = () => import('../views/demo2.vue')
const Demo3 = () => import('../views/demo3.vue')
const Demo4 = () => import('../views/demo4.vue')
const Demo5 = () => import('../views/demo5.vue')
const Demo6 = () => import('../views/demo6.vue')
const Demo7 = () => import('../views/demo7.vue')
const Demo8 = () => import('../views/demo8.vue')
const Demo9 = () => import('../views/demo9.vue')
const Demo10 = () => import('../views/demo10.vue')
const Demo11 = () => import('../views/demo11.vue')
const Demo12 = () => import('../views/demo12.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/demo1',
  },
  {
    path: '/demo1',
    name: 'Demo1',
    component: Demo1,
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: Demo2,
  },
  {
    path: '/demo3',
    name: 'Demo3',
    component: Demo3,
  },
  {
    path: '/demo4',
    name: 'Demo4',
    component: Demo4,
  },
  {
    path: '/demo5',
    name: 'Demo5',
    component: Demo5,
  },
  {
    path: '/demo6',
    name: 'Demo6',
    component: Demo6,
  },
  {
    path: '/demo7',
    name: 'Demo7',
    component: Demo7,
  },
  {
    path: '/demo8',
    name: 'Demo8',
    component: Demo8,
  },
  {
    path: '/demo9',
    name: 'Demo9',
    component: Demo9,
  },
  {
    path: '/demo10',
    name: 'Demo10',
    component: Demo10,
  },
  {
    path: '/demo11',
    name: 'Demo11',
    component: Demo11,
  },
  {
    path: '/demo12',
    name: 'Demo12',
    component: Demo12,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

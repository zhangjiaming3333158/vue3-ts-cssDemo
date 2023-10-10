import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
const Demo1 = () => import('../views/demo1.vue')
const Demo2 = () => import('../views/demo2.vue')
const Demo3 = () => import('../views/demo3.vue')
const Demo4 = () => import('../views/demo4.vue')

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

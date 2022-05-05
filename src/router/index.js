import { createRouter, createWebHistory } from 'vue-router'

const classify = () => import('../views/classify/classify.vue')
const shopping = () => import('../views/shopping/shopping.vue')
const my = () => import('../views/my/my.vue')
const home = () => import('../views/home/home.vue')
const Detail = () => import('../views/detail/Detail.vue')

const routes = [
  {
    path: '/classify',
    component: classify
  },
  {
    path: '/shopping',
    component: shopping
  },
  {
    path: '/my',
    component: my
  },
  {
    path: '/home',
    component: home,
    meta: {
      keepAlive: true
    },
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

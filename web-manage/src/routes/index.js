import { createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/components/layout/index.vue')
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: "/home",
    children: [
      {
        name: '首页',
        component: () => import('@/pages/Home.vue'),
        path: '/home'
      }
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
  },
  { 
    path: '/:pathMatch(.*)*',
    name: '404', 
    component: () => import('@/pages/404.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
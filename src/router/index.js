import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/AdminDashboard.vue'),
      children: [
        {
          path: 'search',
          name: 'search',
          component: () => import('@/components/dashboard/Search.vue'),
        },
        {
          path: 'scanqr',
          name: 'scanqr',
          component: () => import('@/components/dashboard/ScanQrCode.vue'),
        },
        {
          path: 'all',
          name: 'all',
          component: () => import('@/components/dashboard/All.vue'),
        },
      ],
    },
  ],
})

export default router
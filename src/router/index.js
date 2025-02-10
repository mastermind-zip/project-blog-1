import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('@/views/HomeView.vue'),
    },
    {
      path: '/portraits',
      name: 'portraits',
      component: () => import ('@/views/Portraits.vue')
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: () => import ('@/views/AboutMe.vue')
    },
    {
      path: '/contact-me',
      name: 'contact-me',
      component: () => import ('@/views/ContactMe.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import ('@/views/Blog.vue')
    },
    {
      path: '/create-post',
      name: 'create post',
      component: () => import ('@/views/CreatePost.vue')
    },
  ],
})

export default router

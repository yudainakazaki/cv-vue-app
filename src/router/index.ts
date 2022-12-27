import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/education',
      name: 'Education',
      component: () => import('../views/Education.vue')
    },
    {
      path: '/experience',
      name: 'Experience',
      component: () => import('../views/Experience.vue')
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('../views/Skills.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    },
  ],
  linkActiveClass: 'router-link-active'
})

export default router;

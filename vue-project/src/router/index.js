import { createRouter, createWebHistory } from 'vue-router'
import PizzaBuilder from '@/views/PizzaBuilder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // specific path that goes somewhere
      path: '/',
      name: 'home',
      component: PizzaBuilder,
    },
  ],
})

export default router

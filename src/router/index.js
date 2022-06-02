import { createRouter, createWebHistory } from 'vue-router'
import remark from '../views/remark.vue'
import Time from '../views/time.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
     path:'/remark',
     component:remark,
  },
  {
    path:'/time',
    component:Time,
  }
  ]
})

export default router

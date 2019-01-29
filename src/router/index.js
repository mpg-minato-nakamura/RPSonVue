import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      meta: { requiresAuth: true },
      component: Top
    },
  ]
})

export default router

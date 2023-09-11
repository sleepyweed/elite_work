import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test1',
    name: 'test1',
    component: () => import('../views/TestOneView.vue')
  },
  {
    path: '/test2',
    name: 'test2',
    component: () => import('../views/TestTwoView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

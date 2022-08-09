import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Modal from '../views/Modal.vue'
import WishFooter from '../views/WishFooter.vue'
import WishHeader from '../views/WishHeader.vue'
import WishInput from '../views/WishInput.vue'
import WishList from '../views/WishList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal
  },
  {
    path: '/wishFooter',
    name: 'WishFooter',
    component: WishFooter
  },
  {
    path: '/wishHeader',
    name: 'WishHeader',
    component: WishHeader
  },
  {
    path: '/wishInput',
    name: 'WishInput',
    component: WishInput
  },
  {
    path: '/wishList',
    name: 'WishList',
    component: WishList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import Home from '../pages/Home.vue'
// @ts-ignore
import Profile from '../pages/Profile.vue'
// @ts-ignore

import ActiveBlog from '../pages/ActiveBlog.vue'
// @ts-ignore

import CreateBlog from '../pages/CreateBlog.vue'
// @ts-ignore

import { Auth0Provider } from '@bcwdev/auth0provider-client'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: Auth0Provider.authGuard
  },
  {
    path: '/blogs/:blogId',
    name: 'ActiveBlog',
    component: ActiveBlog
  },
  {
    path: '/createBlog',
    name: 'CreateBlog',
    component: CreateBlog
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router

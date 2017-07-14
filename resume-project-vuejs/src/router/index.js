import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Static from '@/components/Static'
import Interactive from '@/components/Interactive'

Vue.use(Router)

const routes = [
   {path: '/', name: 'Home', component: Home},
   {path: '/Hello', name: 'Hello', component: Hello},
   {path: '/Static', name: 'Static', component: Static},
   {path: '/Interactive', name: 'Interactive', component: Interactive}
]

const router = new Router({
  routes: routes
})

export default router

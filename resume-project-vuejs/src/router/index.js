import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import World from '@/components/World'

Vue.use(Router)

const routes = [
   {path: '/', name: 'Hello', component: Hello},
   {path: '/World', name: 'World', component: World}
]

const router = new Router({
  routes: routes
})

export default router

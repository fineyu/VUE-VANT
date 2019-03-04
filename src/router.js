import Vue from 'vue'
import Router from 'vue-router'
import register from './views/register'
import HelloWorld from './components/HelloWorld'

function route (name) {
  return () => import(`@/views/${name}.vue`)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: route('login')
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/friend',
      name: 'friend',
      component: route('friend')
    },
    {
      path: '/search',
      name: 'search',
      component: route('search')
    },
    {
      path: '/set',
      name: 'set',
      component: route('set')
    }
  ]
})

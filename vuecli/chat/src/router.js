import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: () => import(/* webpackChunkName: "about" */ './views/movie/Movie.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import(/* webpackChunkName: "about" */ './views/music/Music.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('./views/book/Book.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('./views/chat/Chat.vue')
    },
    {
      path:'*',
      component:() => import('./views/Error.vue')
    }
  ]
})

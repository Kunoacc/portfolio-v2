import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import {
  newScript
} from '../public/main'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        reuse: false
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/works',
      name: 'works',
      component: () =>
        import( /* webpackChunkName: "works" */ './views/Works.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () =>
        import( /* webpackChunkName: "contact" */ './views/Contact.vue')
    }
  ]
})
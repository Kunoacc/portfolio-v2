import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      shouldShowLoader: true
    }
  },
  {
    path: '/works',
    name: 'works',
    component: () =>
        import(/* webpackChunkName: "works" */ './views/Works.vue'),
    meta: {
      shouldShowLoader: true
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () =>
        import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    meta: {
      shouldShowLoader: true
    }
  }
  ]
})

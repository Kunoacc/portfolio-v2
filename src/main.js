import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrismicVue from 'prismic-vue'
import LinkResolver from './utils/link-resolver'
import '../public/style.css'

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  LinkResolver
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

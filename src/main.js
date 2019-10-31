import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { CIconPlugin } from '@coreui/icons/vue'
import { iconsSet } from './assets/icons/icons.js'
import Vuebar from 'vuebar';

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(CIconPlugin, iconsSet)
Vue.use(Vuebar)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
})

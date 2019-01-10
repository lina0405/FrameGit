import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import { AJAX, Service } from './assets/js/Service'
import _ from 'lodash'

import './plugins/element.js'
import './element-variables.scss'
import '@/assets/css/style.less'

Vue.config.productionTip = false
Vue.use(Element)

Vue.prototype.$http = Service
Vue.prototype.$ajax = AJAX
Vue.prototype.$_ = _

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

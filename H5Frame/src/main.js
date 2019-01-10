import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { AJAX, Service } from './assets/js/Service'
import { Msg } from './assets/js/Msg'
import { Lazyload } from 'vant';
import _ from 'lodash'

import '@/assets/css/style.less'

Vue.prototype.$http = Service
Vue.prototype.$ajax = AJAX
Vue.prototype.$msg = Msg
Vue.prototype.$_ = _

Vue.config.productionTip = false

Vue.use(Lazyload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { safeData, setTitle, remInit, toPage } from '@/utils'
import './widget-register.js'
import {
  Toast,
  Tab,
  Tabs,
  List
} from 'vant'
import './style/global.less'
remInit()

Vue.use(Tabs)
Vue.use(Tab)
Vue.use(List)
Vue.use(Toast)

Vue.config.productionTip = false
Vue.prototype.$toast = Toast
Vue.prototype.$f = {
  safeData,
  setTitle,
  toPage
}

window.Vue = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

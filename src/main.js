import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { safeData, setTitle, remInit, toPage, jumpPage } from '@/utils'
import H5FormRender from 'h5-form-render'
import './widget-register.js'
import {
  Toast,
  Tab,
  Tabs,
  List,
  Button,
  Cell,
  Swipe,
  SwipeItem
} from 'vant'
import './style/global.less'
remInit()

Vue.use(H5FormRender)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(List)
Vue.use(Button)
Vue.use(Cell)
Vue.use(Swipe)
Vue.use(SwipeItem)

Vue.config.productionTip = false
Vue.prototype.$toast = Toast
Vue.prototype.$f = {
  safeData,
  setTitle,
  toPage,
  jumpPage
}

window.Vue = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

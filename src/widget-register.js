import Vue from 'vue'
import { strInitialUp } from './utils'

const requireCom = require.context('./components/widget/', false, /\.vue$/)

requireCom.keys().forEach(key => {
  const _component = requireCom(key)
  const _componentName = strInitialUp(key.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  Vue.component(`Widget${_componentName}`, _component.default || _component)
})

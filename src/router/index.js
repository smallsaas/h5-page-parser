import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'parser',
    component: () => import('@/views'),
    meta: {
      title: 'page-parser',
      keepAlive: false
    }
  }
]

const RouterModel = new Router({
  routes
})

RouterModel.beforeEach((to, from, next) => {
  next()
})

export default RouterModel

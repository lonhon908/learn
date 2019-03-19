import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from '../views/vuex/route';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/vuex'
    },
    {
      path: '/vuex',
      name: 'vuex',
      redirect: 'vuex/simple',
      component: () => import(/* webpackChunkName: 'Vuex' */ '../views/vuex/view.vue'),
      children: [
        ...VueRouter
      ]
    }
  ]
})

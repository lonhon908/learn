import Vue from 'vue'
import Router from 'vue-router'
import vuexRouter from '../views/vuex/route';
import animationRouter from '../views/animation/route';

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
      redirect: 'vuex/state',
      component: () => import(/* webpackChunkName: 'Vuex' */ '../views/vuex/view.vue'),
      children: [
        ...vuexRouter
      ]
    },
    {
      path: '/animation',
      name: 'animation',
      redirect: 'animation/baseTrans',
      component: () => import(/* webpackChunkName: "Animation" */ '../views/animation/view.vue'),
      children: [
        ...animationRouter
      ]
    }
  ]
})

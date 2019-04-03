import Vue from 'vue'
import Router from 'vue-router'
import vuexRouter from '../views/vuex/route';
import animationRouter from '../views/animation/route';
import componentViewRouter from '../views/componentView/route';
import renderRouter from '../views/render/route';
import vueAPIRouter from '../views/vueAPI/route';
import vueRouterRouter from '../views/vueRouter/route';

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
    },
    {
      path: '/componentView',
      name: 'componentView',
      redirect: 'componentView/overlay',
      component: () => import(/* webpackChunkName: "ComponentView" */ '../views/componentView/view.vue'),
      children: [
        ...componentViewRouter
      ]
    },
    {
      path: '/render',
      name: 'render',
      redirect: 'render/baseRender',
      component: () => import(/* webpackChunkName: "Render" */ '../views/render/view.vue'),
      children: [
        ...renderRouter
      ]
    },
    {
      path: '/vueAPI',
      name: 'vueAPI',
      redirect: 'vueAPI/$data',
      component: () => import(/* webpackChunkName: "VueAPI" */ '../views/vueAPI/view.vue'),
      children: [
        ...vueAPIRouter
      ]
    },
    {
      path: '/vueRouter',
      // 别名
      alias: '/vuerouter',
      name: 'vueRouter',
      redirect: 'vueRouter/dynamicRouteMatching',
      component: () => import(/* webpackChunkName: "vueRouter" */ '../views/vueRouter/view.vue'),
      children: [
        ...vueRouterRouter
      ]
    },
  ]
})


import Vue from 'vue';
import Vuex from 'vuex';

import vuexStore from '../views/vuex/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    namespaced: true,
    vuex: vuexStore
  },
  // 单一状态树
  state: {
    title: '首页', // 头部标题
    menuData: [{ // 大菜单
      path: '/vuex', // 路由
      name: 'vuex', // 命名路由
      value: 'vuex', // 该路由描述
      title: 'vuex', // 路由中文名
    }],
    activeSmallMenuData: [], // 小菜单
    // vuex路由数据
    vuexData: {
      count: 100
    },
    numbers: [1, 2, 's', false, Math, () => ([])],
    filterType: 'number',
    countVuex: 1,
  },
  mutations: {
    // 提交载荷（Payload）
    changeTitle(state, Payload) {
      // 在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读
      state.title = Payload.title;
    },
    add(state, data = {}) {
      state.countVuex += data.step || 1;
    },
    increment(state) {
      state.countVuex++;
    },
    incrementBy(state, data) {
      state.countVuex += data;
    }
  },
  getters: {
    numberList(state) {
      console.log(arguments)
      return state.numbers.filter(item => Object.prototype.toString.call(item) === '[object Number]')
    },
    // 通过让 getter 返回一个函数，来实现给 getter 传参
    numberListData: (state) => (data) => {
      return state.numbers.filter(item => Object.prototype.toString.call(item) === `[object ${data}]`)
    }
  },
  actions: {
    // 支持异步操作
    increment(context, data) {
      // 可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters
      setTimeout(() => {
        // Action 提交的是 mutation，而不是直接变更状态。
        context.commit('increment')
      }, data.time * 1000)
    },
    // 解构
    incrementBy({commit}, data) {
      setTimeout(() => {
        commit('incrementBy', data.step)
      }, data.time * 1000)
    },
    // 组合 Action  返回promise
    actionA ({ dispatch, state }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          dispatch('incrementBy', {time: 1, step: 100000})
          resolve(state.numbers)
        }, 1000)
      })
    },
    async actionB () {
      return await Promise.resolve(100)
    },
  }
})

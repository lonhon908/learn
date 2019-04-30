import menu from './menu';

export default {
  // 命名空间
  namespaced: true,
  state: {
    smallMenu: menu, // 小菜单
  },
  mutations: {},
  getters: {},
  actions: {
    // 大菜单选择时（一级路由）调用
    setSmallMenu({state, commit}) {
      // 带命名空间的matutions ,使用 {root: true},这样就可以访问根store
      commit('setterSmallMenu', state.smallMenu, {root: true})
    }
  }
}

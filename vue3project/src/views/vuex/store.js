export default {
  namespaced: true,
  state: {
    componentInsideType: []
  },
  mutations: {
    changeComponent(state, data) {
      state.componentInsideType.push(data.name)
    }
  }
}

export default {
  namespaced: true,
  state: {
    person: '李四',
    list: [1, 0, 0, 9]
  },
  mutations: {
    changePerson(state, data) {
      state.person = data.person;
    }
  },
  actions: {
    setPerson({commit}, data) {
      setTimeout(() => {
        commit('changePerson', data)
      }, 1000)
    }
  },
  getters: {
    largeThenZeon(state) {
      return state.list.filter(item => item)
    }
  }
}
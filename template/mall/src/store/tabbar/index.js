export default {
  namespaced: true,
  state: {
    index: 0
  },
  mutations: {
    switch(state, index) {
      state.index = index
    }
  }
}

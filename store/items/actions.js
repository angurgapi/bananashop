export default {
 
  ADD_ITEM({ state, commit }, payload) {
    commit(
      'ADD_TO_ITEMS',
      payload
    )
  },
  DELETE_ITEM({ commit }, id) {
    commit('DELETE_FROM_ITEMS', id)
  },
  
}

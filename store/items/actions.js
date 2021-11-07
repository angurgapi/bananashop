export default {
 
  ADD_ITEM({ commit }, payload) {
    commit(
      'ADD_TO_ITEMS',
      payload
    )
  },
  DELETE_ITEM({ commit }, id) {
    commit('DELETE_FROM_ITEMS', id)
  },
  
}

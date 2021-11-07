export default {
  ADD_TO_ITEMS(state, itemData) {
    state.items.push(itemData)
  },
  DELETE_FROM_ITEMS(state, itemId) {
    state.items = state.items.filter(({id}) => id !== itemId)
  }
}

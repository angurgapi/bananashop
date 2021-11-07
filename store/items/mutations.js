export default {
  ADD_TO_ITEMS(state, itemData) {
    itemData.id = state.items.length
    state.items.push(itemData)
  },
  DELETE_FROM_ITEMS(state, itemId) {
    state.items = state.items.filter(({id}) => id !== itemId)
  }
}

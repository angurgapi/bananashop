import Cookies from 'js-cookie'

export default {
  ADD_TO_ITEMS(state, itemData) {
    itemData.id = state.items.length
    state.items.push(itemData)
    Cookies.set('items', state.items)
  }
}

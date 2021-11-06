export { default as ItemCard } from '../../components/ItemCard.vue'
export { default as ItemsContainer } from '../../components/ItemsContainer.vue'
export { default as NewItemWidget } from '../../components/NewItemWidget.vue'
export { default as PageHeader } from '../../components/PageHeader.vue'
export { default as SortMenu } from '../../components/SortMenu.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

<template>
  <div class="wrapper">
    <SortMenu @sort="handleSort" />
    <NewItemWidget />
    <ItemsContainer ref="items" />
  </div>
</template>



<script>
import ItemsContainer from '../components/ItemsContainer'
import NewItemWidget from '../components/NewItemWidget'
import SortMenu from '../components/SortMenu.vue'

export default {
  data: () => ({}),
  components: { NewItemWidget, ItemsContainer, SortMenu },
  methods: {
    handleSort(value) {
      this.$refs.items.activeSort = value
    }
  },
}
</script>

<style lang='scss'>
.wrapper {
    padding: 0 32px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 16px;
  }
</style>
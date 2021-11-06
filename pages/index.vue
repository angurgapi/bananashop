<template>
  <div class="wrapper">
    <NewItemWidget />
    <ItemsContainer />
  </div>
</template>



<script>
import ItemsContainer from '../components/ItemsContainer'
import NewItemWidget from '../components/NewItemWidget'

export default {
  data: () => ({}),
  components: { NewItemWidget, ItemsContainer },
  methods: {
     
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
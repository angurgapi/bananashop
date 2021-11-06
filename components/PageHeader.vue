<template>
<div class="header">
  <h3 class="header__title">Добавление товара</h3><SortMenu />
</div>
</template>

<script>
import SortMenu from './SortMenu'

	export default{
    name: 'Header',
    components: {SortMenu},
	}
</script>

<style scoped lang='scss'>
.header {
  display: flex;
  justify-content: space-between;
  padding: 32px;
  &__title {    
    color: #3F3F3F;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 28px;
    font-weight: 600;
  }
}
</style>
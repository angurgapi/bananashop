<template>
<div class="header">
  <h3 class="header__title">Добавление товара</h3><div class="sort-select">По умолчанию</div>
</div>
</template>

<script>
	export default{
    name: 'Header'
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
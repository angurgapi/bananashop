<template>
  <div>
  	<PageHeader />
    <Nuxt />
  </div>
</template>

<style lang='sass'>

html
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif

*,
*::before,
*::after 
  box-sizing: border-box
  margin: 0


.page-wrapper
  width: 100%
  margin: 0
  padding-top: 30px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

h2
  text-align: center
  margin: auto

</style>

<script>
	import PageHeader from '~/components/PageHeader.vue'
	export default{

	}
</script>
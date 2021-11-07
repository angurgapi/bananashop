<template>
    <div class="items-container">
        <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ItemCard from './ItemCard'

export default {
    name: 'ItemsContainer',
    props: {
        activeSort: {
            type:  [String, Number],
            default: 1,
        }
    },
    components: {ItemCard},
    data: () => ({
    
    }),
    computed: {
        ...mapState('items', ['items']),
    },
}
</script>

<style lang="scss" scoped>
.items-container {
    display: grid;
    grid-template-columns: repeat(3, 332px);
    grid-gap: 16px;
    @media(max-width: 1440px) {
        grid-template-columns: repeat(2, 1fr) ;
    }
    @media(max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: 600px) {
        grid-template-columns: 1fr ;
    }
}
</style>
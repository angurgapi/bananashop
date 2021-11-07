<template>
    <div class="items-container">
        <ItemCard v-for="item in getSortedItems" :key="item.id" :item="item" />
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
    data() {
        return {
            // itemsList: [],
        }
    },
    computed: {
        ...mapState('items', ['items']),
        getSortedItems() {
            let itemsList = [...this.items]
            switch (this.activeSort) {
                case 1: 
                    return itemsList.sort((a, b) => a.title.localeCompare(b.title))
                case 2: 
                    return itemsList.sort((a, b) => parseInt(b.price.split(' ').join('')) - parseInt(a.price.split(' ').join('')))
                case 3: 
                    return itemsList.sort((a, b) => parseInt(a.price.split(' ').join('')) - parseInt(b.price.split(' ').join('')))
                default:
                    return itemsList.sort((a, b) => a.title.localeCompare(b.title))

            }
            
        }
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
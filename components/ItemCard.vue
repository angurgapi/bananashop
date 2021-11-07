<template>
    <div class="card">
        <div class="card__header">
            <button class="card__delete" @click="deleteItem(item)">
                <svg-icon name="delete" />
            </button>
            <img class="card__image" :src="item.image" />
            
        </div>
        <div class="card__body">
            <h3 class="card__title">{{item.title}}</h3>
            <p class="card__description">{{item.description}}</p>
            <h3 class="card__price">{{item.price}} руб.</h3>
        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'ItemCard',
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    methods: {
        ...mapActions('items', ['DELETE_ITEM']),
        deleteItem({id}) {
            this.DELETE_ITEM(id)
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    width: 332px;
    height: 423px;
    border-radius: 10px;
    box-shadow: 0 10px 12px rgba(0, 0, 0, .2);
    &__image {
        height: 200px;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
    &__body {
        padding: 16px;
    }
    &__title {
        font-size: 20px;
    }
    &__description {
        margin-top: 16px;
        font-size: 16px;
    }
    &__price {
        position: absolute;
        bottom: 24px;
        font-size: 24px;
    }
    &:hover {
       box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
    }
    &__delete {
        position: absolute;
        background-color: #FF8484;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        width: 32px;
        border-radius: 10px;
        color: #fff;
        z-index: 1010;
        right: -5px;
        top: -5px;
    }
}
</style>

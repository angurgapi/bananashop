<template>
    <div class="card">
        <div class="card__header">
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

export default {
    name: 'ItemCard',
    props: {
        item: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    width: 332px;
    height: 423px;
    border-radius: 10px;
    box-shadow: 0 0 12px rgba(0, 0, 0, .04);
    &__image {
        height: 200px;
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
        margin-top: 32px;
        font-size: 24px;
    }
    &:hover {
       box-shadow: 0 0 12px rgba(0, 0, 0, .2);
    }
}
</style>

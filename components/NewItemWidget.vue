<template>
    <div class="new-item">
        <form @submit.prevent="submit" class="form">
            <div class="form__item">
                <label class="form__label form__label--required" for='title'>Наименование товара</label>
                <input type="text"
                name="title"
                required
                placeholder="Введите наименование товара"            
                v-model="formData.title"
                class="form__input">
            </div>
            <div class="form__item">
                <label class="form__label" for='description'>Наименование товара</label>
                <textarea
                rows="5"
                name="description"
                placeholder="Введите описание товара"            
                v-model="formData.description"
                class="form__input" />
            </div>
            <div class="form__item">
                <label class="form__label form__label--required" for='image'>Ссылка на изображение товара</label>
                <input type="text"
                required
                name="image"
                placeholder="Введите ссылку"            
                v-model="formData.image"
                class="form__input">
            </div>
            <div class="form__item">
                <label class="form__label form__label--required" for='price'>Цена товара</label>
                <input type="text"
                required
                name="price"
                placeholder="Введите цену"            
                v-model="formData.price"
                class="form__input">
            </div>
            <div class="form__item">
                <button :disabled="!isValid" class="form__button" :class="{ 'form__button--disabled': !isValid }">Добавить товар</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'NewItemWidget',
    data: () => ({
        formData: {
            title: '',
            description: '',
            price: '',
            image: '',
        },
    }),
    computed: {
        isValid() {
            return this.formData.title.length && this.formData.price.length && this.formData.image.length
        }
    },
    methods: {
        ...mapActions('items', ['ADD_ITEM']),
        submit() {
            this.ADD_ITEM(this.formData)            
            this.resetAllFields()
        },
        resetAllFields() {
            for (const key in this.formData) {
                this.formData[key] = ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.new-item {
    max-height: 460px;
    width: 332px;
    padding: 24px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
    &:hover {
       box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
    }
}
.form {
    &__item {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    }
    &__label {
        font-size: 10px;
        &--required::after {
            position: relative;
            content: '';
            display: inline-block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: #FF8484;
            left: 5px;
            top: -5px;
        }    
    }
    &__input {
        border: none;
        outline: none;
        margin-top: 4px;
        padding: 10px 16px;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
        &:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
        }
        &::placeholder {
            color: #B4B4B4;
        }
    }
    &__button {
        height: 36px;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        background-color: #7BAE73;
        color: #fff;
        font-weight: 600;
        font-size: 12px;
        &--disabled {
          background-color: #EEEEEE;
          color: #B4B4B4;
        }

    }
}
</style>

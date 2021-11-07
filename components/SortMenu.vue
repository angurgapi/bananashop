<template>
    <div class="dropdown">        
        <li class="dropdown__option">{{ sortList[activeSort-1].label }} <svg-icon @click="isOpenDropdown = !isOpenDropdown" class="dropdown__icon" name="chevron" /></li>
        <ul class="dropdown__menu" v-if="isOpenDropdown">
            <li @click="pickSort(option)" class="dropdown__option" v-for="option in sortList" :key="option.value" :value="option.value">
                {{ option.label }} <svg-icon class="dropdown__icon" v-if="option.icon" :name="option.icon" />
            </li>
        </ul>
  </div>
</template>


<script>
import SvgIcon from './SvgIcon.vue'

export default {
  components: { SvgIcon },
    name: 'SortMenu',
    
    data: () => ({
        isOpenDropdown: false,
        activeSort: 1,
        sortList: [
            {
                label: 'По умолчанию',
                value: 1,
                type: 'down',
              
            },
            {
                label: 'По цене',
                value: 2,
                type: 'down',
                icon: 'arrow-down',
            },
            {
                label: 'По цене',
                value: 3,
                type: 'up',
                icon: 'arrow-up',
            },
            {
                label: 'По наименованию',
                value: 4,
                type: 'down',
            },     
        ],
    }),
    methods: {
        pickSort(option) {
            this.isOpenDropdown = false
            this.activeSort = option.value
            this.$emit('sort', option.value)
        }
    },
}
</script>

<style lang="scss" scoped>
.dropdown {
    position: absolute;
    right: 24px;
    top: 24px;
    z-index: 1100;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
    background-color: #fff;
    color: #B4B4B4;

    &__menu, &__option {
        list-style: none;
        cursor: pointer;
    }
    &__option {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        &:hover {
            background-color: rgba(0,0,0,.07);
        }
    }
    &__icon {
        height: 10px;
        width: 20px;
    }
}
</style>
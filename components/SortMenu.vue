<template>
    <div class="dropdown">
        <ul class="dropdown__menu">
            <li class="dropdown__option">По умолчанию</li>
            <li class="dropdown__option" v-for="option in sortList" :key="option.value" :value="option.value">
                {{ option.label }}
            </li>
        </ul>
  </div>
</template>


<script>

export default {
    name: 'SortMenu',
    data: () => ({
        sortList: [
            {
                label: 'По цене',
                value: 1,
                type: 'down',
            },
            {
                label: 'По цене',
                value: 2,
                type: 'up',
            },
            {
                label: 'По наименованию',
                value: 3,
                type: 'down',
            },     
        ],
    })
}
</script>

<style lang="scss" scoped>
.dropdown {
    position: relative;
    height: 36px;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
    background-color: #fff;
    color: #B4B4B4;
}
</style>
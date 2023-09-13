<template>
    <div class="container">
        <div class="title">{{ title }}</div>
        <div class="item" v-for="(item, idx ) in num" :style="{
            order: order[idx],
            flexGrow: flexGrow[idx],
            flexBasis: flexBasis[idx],
            alignSelf: alignSelf[idx]
        }">
            <div class="innerbox">{{ item }}</div>
            <span v-if="order[idx]"> {{ `order: ${order[idx]};` }} </span>
            <span v-if="flexGrow[idx]"> {{ `flex-grow: ${flexGrow[idx]};` }} </span>
            <span v-if="flexBasis[idx]"> {{ `flex-basis: ${flexBasis[idx]};` }}</span>
            <span v-if="alignSelf[idx]"> {{ `align-self: ${alignSelf[idx]};` }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: ''
    },
    num: {
        type: Number,
        default: 0
    },
    order: {
        type: Array,
        default: []
    },
    flexGrow: {
        type: Array,
        default: []
    },
    flexBasis: {
        type: Array,
        default: []
    },
    alignSelf: {
        type: Array,
        default: []
    }
})

</script>

<style lang="less" scoped>
.title {
    position: absolute;
    top: 0px;
    right: -16px;
    transform: translate(0, -100%);
    background-color: #ccc;
    padding: 5px 16px;
    font-size: 16px;
    line-height: 32px;
    z-index: 99;
    font-weight: bold;
    color: #fff;
    border-top-left-radius: 10px;
}

span {
    position: absolute;
    font-size: 12px;
    bottom: 10px;
    width: fit-content;
    white-space: nowrap;
    padding: 3px 6px;
    border-radius: 3px;
    background-color: #666;
}
</style>
<template>
    <div class="container">
        <div class="item" :style="{
            order: order ? order[idx] : 0,
            flexGrow: flexGrow ? flexGrow[idx] : 0,
            flexBasis: flexBasis ? flexBasis[idx] : 'auto'
        }" v-for="(item, idx ) in num">
            <div class="innerbox">{{ idx + 1 }}</div>
            <span class="order-text" v-if="order ? order[idx] : false"> {{ `order:${order[idx]};` }} </span>
            <span class="order-text" v-if="flexGrow ? flexGrow[idx] : false"> {{ `flex-grow:${flexGrow[idx]};` }} </span>
            <span class="order-text" v-if="flexBasis ? flexBasis[idx] : false"> {{ `flex-basis:${flexBasis[idx]};` }} </span>
        </div>
    </div>
</template>

<script setup>

defineProps({
    num: Number,
    order: Array,
    flexGrow: Array,
    flexBasis: Array
})

</script>

<style lang="less" scoped>
.order-text {
    position: absolute;
    font-size: 12px;
    bottom: 10px;
}
</style>
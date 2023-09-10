<template>
    <div class="container">
        <div class="item" v-for="(item, idx ) in num">
            <div class="innerbox">{{ idx + 1 }}</div>
        </div>
    </div>
</template>

<script setup>

defineProps({
    num: Number
})

</script>

<style lang="less" scoped></style>
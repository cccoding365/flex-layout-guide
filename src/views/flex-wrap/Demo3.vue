<template>
    <flexBox title="flex-wrap: wrap-reverse;" :num="10" />
</template>

<script setup>
import flexBox from '@/components/flexBox.vue'
</script>

<style lang="less" scoped>
.container {
    flex-wrap: wrap-reverse;
}
</style>
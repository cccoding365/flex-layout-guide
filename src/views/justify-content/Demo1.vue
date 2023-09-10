<template>
    <flexBox :num="3" />
</template>

<script setup>
import flexBox from '@/components/flexBox.vue'
</script>

<style lang="less" scoped>
.container {
    justify-content: flex-start;
}
</style>
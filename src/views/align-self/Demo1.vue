<template>
    <flexBox :num="3" :alignSelf="[, 'flex-end',]" />
</template>

<script setup>
import flexBox from '@/components/flexBox'
</script>

<style lang="less" scoped>
.container {
    align-items: flex-start;
}
</style>
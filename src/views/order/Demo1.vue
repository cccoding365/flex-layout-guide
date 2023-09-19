<template>
    <flexBox :num="5" :order="[, , -1]" />
</template>

<script setup>
import flexBox from '@/components/flexBox'
</script>

<style lang="less" scoped>
.container {
    flex-direction: row;
}
</style>
<template>
    <flexBox :num="3" :flexBasis="[, '300px',]" />
</template>

<script setup>
import flexBox from '@/components/flexBox'
</script>

<style lang="less" scoped>
.container {
    flex-direction: row;
}
</style>
<template>
    <flexBox title="align-items: stretch;" :num="3" />
</template>

<script setup>
import flexBox from '@/components/flexBox'
</script>

<style lang="less" scoped>
.container {
    flex-wrap: wrap;
    align-items: stretch;
}
</style>
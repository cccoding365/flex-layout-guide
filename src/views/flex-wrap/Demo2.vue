<template>
    <flexBox title="flex-wrap: wrap;" :num="10" />
</template>

<script setup>
import flexBox from '@/components/flexBox'
</script>

<style lang="less" scoped>
.container {
    flex-wrap: wrap;
}
</style>
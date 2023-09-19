<template>
    <flexBox title="flex-direction: row-reverse;" :num="3" />
</template>

<script setup>
import flexBox from '@/components/flexBox'
</script>

<style lang="less" scoped>
.container {
    flex-direction: row-reverse;
}
</style>
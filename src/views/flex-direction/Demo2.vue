<template>
    <flexBox title="flex-direction: column;" :num="3" />
</template>

<script setup>
import flexBox from '@/components/flexBox'
</script>

<style lang="less" scoped>
.container {
    flex-direction: column;
}
</style>
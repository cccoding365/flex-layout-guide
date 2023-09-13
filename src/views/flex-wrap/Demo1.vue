<template>
    <flexBox title="flex-wrap: nowrap;" :num="10" />
</template>

<script setup>
import flexBox from '@/components/flexBox.vue'
</script>

<style lang="less" scoped>
.container {
    flex-wrap: nowrap;
}
</style>
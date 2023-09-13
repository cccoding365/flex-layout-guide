<template>
    <flexBox title="align-content: space-between;" :num="24" />
</template>

<script setup>
import flexBox from '@/components/flexBox.vue'
</script>

<style lang="less" scoped>
.container {
    flex-wrap: wrap;
    align-content: space-between;
}
</style>
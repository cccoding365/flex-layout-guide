<template>
    <flexBox title="align-content: center;" :num="24" />
</template>

<script setup>
import flexBox from '@/components/flexBox.vue'
</script>

<style lang="less" scoped>
.container {
    flex-wrap: wrap;
    align-content: center;
}
</style>
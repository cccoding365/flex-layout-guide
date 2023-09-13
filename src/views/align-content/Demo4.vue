<template>
    <flexBox title="align-content: flex-end;" :num="27" />
</template>

<script setup>
import flexBox from '@/components/flexBox.vue'
</script>

<style lang="less" scoped>
.container {
    flex-wrap: wrap;
    align-content: flex-end;
}
</style>
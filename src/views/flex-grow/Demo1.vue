<template>
    <flexBox :num="3" :flexGrow="[, 1,]" />
</template>

<script setup>
import flexBox from '@/components/flexBox.vue'
</script>

<style lang="less" scoped>
.container {
    flex-direction: row;
}
</style>
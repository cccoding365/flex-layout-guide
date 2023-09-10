<template>
    <main>
        <flexDirection />
        <justifyContent />
        <alignItems />
    </main>
</template>

<script setup>
import flexDirection from '@/views/flex-direction/index.vue'
import justifyContent from '@/views/justify-content/index.vue'
import alignItems from '@/views/align-items/index.vue';

</script>

<style lang="less" scoped>
main {
    max-width: 1024px;
    width: 100%;
    margin: auto;
}
</style>

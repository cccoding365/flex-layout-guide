<template>
    <main>
        <flexDirection />
        <justifyContent />
        <alignItems />
        <flexWrap />
        <alignContent />
    </main>
</template>

<script setup>
import flexDirection from '@/views/flex-direction/index.vue'
import justifyContent from '@/views/justify-content/index.vue'
import alignItems from '@/views/align-items/index.vue'
import flexWrap from '@/views/flex-wrap/index.vue'
import alignContent from '@/views/align-content/index.vue'

</script>

<style lang="less" scoped>
main {
    max-width: 1024px;
    width: 100%;
    margin: auto;
}
</style>

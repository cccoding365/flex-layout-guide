<template>
    <main>
        <Demo1 />
        <Demo2 />
        <Demo3 />
        <Demo4 />
    </main>
</template>

<script setup>
import Demo1 from './components/Demo1.vue';
import Demo2 from './components/Demo2.vue';
import Demo3 from './components/Demo3.vue';
import Demo4 from './components/Demo4.vue';

</script>

<style lang="less" scoped>
main {
    max-width: 1024px;
    width: 100%;
    margin: auto;
    padding: 16px;
}
</style>

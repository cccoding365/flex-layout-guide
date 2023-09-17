<template>
    <div class="home">
        <img class="logo" src="/favicon.svg">
        <h1 class="title">Flex Layout Guide</h1>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
        filter: drop-shadow(3px 5px rgb(251, 215, 148));
    }

    .title {
        text-align: center;
        color: rgb(251, 215, 148);
        font-size: 72px;
        filter: drop-shadow(5px 10px rgb(250, 33, 33));
    }
}
</style>
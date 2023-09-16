<template>
    <header>
        <router-link to="/">HOME</router-link>
        <router-link to="/container">CONTAINER</router-link>
        <router-link to="/item">ITEM</router-link>
    </header>
    <main>
        <router-view></router-view>
    </main>
</template>

<script setup>

</script>

<style lang="less" scoped>
header {
    // position: fixed;
    width: 100%;
    z-index: 999;
    height: 100px;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a {
        color: #eee;
        margin-right: 30px;
        padding: 5px 10px;
        border-radius: 5px;

        &:hover {
            opacity: .7;
        }
    }
}

main {
    max-width: 1024px;
    width: 100%;
    margin: auto;
}
</style>

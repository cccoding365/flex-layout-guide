<template>
    <header>
        <nav>
            <router-link to="/">HOME</router-link>
            <router-link to="/container">CONTAINER</router-link>
            <router-link to="/item">ITEM</router-link>
        </nav>
    </header>
    <main>
        <router-view />
    </main>
</template>

<script setup></script>

<style lang="less" scoped>
header {
    nav {
        position: fixed;
        width: 100vw;
        z-index: 999;
        height: 100px;
        font-size: 24px;
        font-weight: bold;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    height: 100px;

    a {
        color: #eee;
        margin-right: 30px;
        padding: 5px 10px;
        border-radius: 5px;
        transition: all .25s ease-in-out;

        &:hover {
            text-decoration: underline;
        }
    }
}

main {
    max-width: 1024px;
    width: 100%;
    margin: auto;
    padding: 50px 0;
}
</style>

<template>
    <header>
        <router-link to="/">HOME</router-link>
        <router-link to="/container">CONTAINER</router-link>
        <router-link to="/item">ITEM</router-link>
    </header>
    <main>
        <Transition>
            <router-view></router-view>
        </Transition>
    </main>
</template>

<script setup>

</script>

<style lang="less" scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
    transition: all 0.25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

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
}
</style>

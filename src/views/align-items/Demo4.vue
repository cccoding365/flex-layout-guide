<template>
    <div class="container">
        <div class="item" v-for="(item, idx) in 3">
            <div class="innerbox">{{ idx + 1 }}</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.container {
    flex-wrap: wrap;
    align-items: stretch;
}
</style>
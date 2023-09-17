import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue';
import FlexContainer from '@/pages/FlexContainer.vue'
import FlexItem from '../pages/FlexItem.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/container', component: FlexContainer },
    { path: '/item', component: FlexItem }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
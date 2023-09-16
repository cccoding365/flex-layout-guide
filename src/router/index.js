import { createRouter, createWebHashHistory } from 'vue-router'

import FlexLayoutHome from '@/pages/FlexLayoutHome.vue';
import flexContainer from '@/pages/flexContainer.vue'
import flexItem from '../pages/flexItem.vue'

const routes = [
    { path: '/', component: FlexLayoutHome },
    { path: '/container', component: flexContainer },
    { path: '/item', component: flexItem }
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
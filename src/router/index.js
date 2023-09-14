import { createRouter, createWebHashHistory } from 'vue-router'

const Home = { template: '<div>Home</div>' }
import flexContainer from '@/pages/flexContainer.vue'
import flexItem from '../pages/flexItem.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/container', component: flexContainer },
    { path: '/item', component: flexItem }
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
})
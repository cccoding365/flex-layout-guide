import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/container',
        component: () => import('@/pages/FlexContainer.vue')
    },
    {
        path: '/item',
        component: () => import('@/pages/FlexItem.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
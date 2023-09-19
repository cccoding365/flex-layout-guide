import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/pages/Home')
    },
    {
        path: '/container',
        component: () => import('@/pages/FlexContainer')
    },
    {
        path: '/item',
        component: () => import('@/pages/FlexItem')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
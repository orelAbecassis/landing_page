import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceDetailView from '../views/ServiceDetailView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/service/:id',
            name: 'service-detail',
            component: ServiceDetailView
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (to.hash) {
                    resolve({
                        el: to.hash,
                        behavior: 'smooth',
                    })
                } else {
                    resolve({ top: 0 })
                }
            }, 500)
        })
    }
})

export default router

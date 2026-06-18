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
        },
        {
            path: '/mentions-legales',
            name: 'mentions-legales',
            component: () => import('../views/MentionsLegalesView.vue')
        },
        {
            path: '/politique-de-confidentialite',
            name: 'politique-de-confidentialite',
            component: () => import('../views/PolitiqueConfidentialiteView.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

export default router

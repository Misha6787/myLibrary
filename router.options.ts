import type { RouterConfig } from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
    routes: (_routes) => [
        {
            name: 'home',
            path: '/',
            component: () => import('./pages/index'),
        },
        {
            name: 'about',
            path: '/about',
            component: () => import('./pages/about')
        }
    ],
}
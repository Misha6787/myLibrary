// import type { RouterConfig } from '@nuxt/schema'
// import {createWebHistory} from 'vue-router'
// // import {RouterHistory} from 'vue-router'
// // https://router.vuejs.org/api/interfaces/routeroptions.html
// export default <RouterConfig> {
//     // history: RouterHistory(),
//     mode: 'history',
//     // history: createWebHistory(),
//     routes: (_routes) => [
//         {
//             name: 'home',
//             path: '/',
//             component: () => import('~/pages/index'),
//             meta: {
//                 title: 'test',
//                 breadCrumb: 'Главная'
//             }
//         },
//         {
//             name: 'about',
//             path: '/about',
//             component: () => import('~/pages/about'),
//             meta: {
//                 title: 'test',
//                 breadCrumb: 'Главная'
//             }
//         },
//         {
//             name: 'posts',
//             path: '/posts',
//             component: () => import('~/pages/posts/posts'),
//             breadCrumb: 'Посты',
//             children: [
//                 {
//                     path: '/posts/[id]',
//                     component: () => import('~/pages/[id]'),
//                     props: true,
//                     meta: {
//                         breadCrumb: 'Главная'
//                     }
//                 }
//             ]
//         }
//     ],
// }
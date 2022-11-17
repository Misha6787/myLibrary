// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
    colorMode: {
        classSuffix: ''
    },
    // router: {
    //     extendRoutes(routes, resolve) {
    //         return [
    //             {
    //                 name: 'home',
    //                 path: '/',
    //                 component: () => import('~/pages/index'),
    //                 meta: {
    //                     title: 'test',
    //                     breadCrumb: 'Главная'
    //                 }
    //             },
    //             {
    //                 name: 'about',
    //                 path: '/about',
    //                 component: () => import('~/pages/about'),
    //                 meta: {
    //                     title: 'test',
    //                     breadCrumb: 'Главная'
    //                 }
    //             },
    //             {
    //                 name: 'posts',
    //                 path: '/posts',
    //                 component: () => import('~/pages/posts/posts'),
    //                 breadCrumb: 'Посты',
    //                 children: [
    //                     {
    //                         path: '/posts/[id]',
    //                         component: () => import('~/pages/[id]'),
    //                         props: true,
    //                         meta: {
    //                             breadCrumb: 'Главная'
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // },
    app: {
        pageTransition: { name: 'page' },
        layoutTransition: { name: 'layout' },
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'My Library',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site' }
            ],
        }
    },
    pages: true,

    css: [
        '~/assets/css/custom.css',
        '~/assets/css/tailwind.css',
    ],
    // build: {
    //     postcss: {
    //         postcssOptions: require('./postcss.config.js'),
    //     },
    // },

    // modules: '@nuxt/tailwindcss',
    // buildModules: [
    //     '@nuxt/postcss8',
    //     // ...
    // ],
    // tailwindcss: {
    //     cssPath: '~/assets/tailwind.css',
    //     configPath: 'tailwind.config.js',
    //     exposeConfig: false,
    //     injectPosition: 0,
    //     viewer: true,
    // },
    // buildModules: [
    //     '@nuxt/postcss8',
    // ],
    // build: {
    //     postcss: {
    //         plugins: {
    //             tailwindcss: {},
    //             autoprefixer: {},
    //         },
    //     },
    // }
})

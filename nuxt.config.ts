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
    app: {
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
        // CSS
        '~/assets/css/main.css',
        '~/assets/css/tailwind.css',
        // SCSS
        '~/assets/scss/main.scss',
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

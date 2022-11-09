// https://v3.nuxtjs.org/api/configuration/nuxt.config



export default defineNuxtConfig({
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

    css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },

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

const { path } = require('@vuepress/utils')

module.exports = {
    theme: path.resolve(__dirname, './docs/.vuepress/theme'),

    themeConfig: {
        sidebar: 'auto'
    },

    bundler: "@vuepress/bundler-vite",
    bundlerConfig: {
        viteOptions: {
            css: {
                postcss: {
                    plugins: [require("tailwindcss")],
                },
            },
        },
    },

    plugins: [
        [
            '@vuepress/register-components',
            {
                componentsDir: path.resolve(__dirname, './components'),
            },
            // {
            //     components: {
            //         FooBar: path.resolve(__dirname, './components/FooBar.vue'),
            //     },
            // },
        ],
    ],
}
module.exports = {
    mode: 'jit',
    content: [
        "./docs/**/*.md",
        "./docs/.vuepress/theme/layouts/Layout.vue",
        "./components/**/*.{vue,js,ts,jsx,tsx}",
    ],
    corePlugins: {
        preflight: true,
    },
    theme: {
        extend: {},
    },
    plugins: [],
    important: '.component-demo',
}

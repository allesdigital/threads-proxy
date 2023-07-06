export default defineNuxtConfig({
  vite: {
    server: {
      hmr: {
        clientPort: 3901,
      },
    },
  },
  css: ["@/node_modules/bulma/css/bulma.min.css"],
  modules: ["nuxt-proxy"],
  proxy: {
    options: [
      {
        target: "https://scontent.cdninstagram.com",
        pathFilter: "/profile_image/",
        pathRewrite: {
          "^/profile_image": "",
        },
        changeOrigin: true,
      },
    ],
  },
});

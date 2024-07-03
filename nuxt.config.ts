// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
    plugins: [
    '~/plugins/firebase.js',
  ],
  
  router: {
    extendRoutes(routes, resolve) {
      routes.push(
        {
          name: 'home',
          path: '/',
          component: resolve(__dirname, 'pages/index.vue')
        },
        {
          name: 'search',
          path: '/search',
          component: resolve(__dirname, 'components/search.vue')
        },
        {
          name: 'upload',
          path: '/upload',
          component: resolve(__dirname, 'components/upload.vue')
        },
        {
          name: 'profile',
          path: '/profile',
          component: resolve(__dirname, 'components/profile.vue')
        }
        // Tambahkan rute tambahan jika ada halaman lain
      );
    }
  }
});

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  /*
   ** Base dir
   */
  srcDir: 'web',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-capacitor-app',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'A Nuxt Capacitor with Ionic boilerplate for any cross platform applications.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@ionic/vue/css/core.css',
    '@ionic/vue/css/normalize.css',
    '@ionic/vue/css/structure.css',
    '@ionic/vue/css/typography.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/capacitor.js' }, { src: '~/plugins/ionic.js' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/eslint-module'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  },
  pwa: {
    manifest: {
      name: 'Nuxt Capacitor Boilerplate',
      short_name: 'Nuxt App',
      lang: 'en',
      useWebmanifestExtension: false,
      start_url: '/'
    },
    meta: {
      theme_color: '#00FF00'
    }
  },
  robots: {
    Sitemap:
      (process.env.SITE_URL || 'https://nuxt-capacitor-app.vercel.app') +
      '/sitemap.xml'
  },
  sitemap: {
    hostname: process.env.SITE_URL || 'https://nuxt-capacitor-app.vercel.app',
    trailingSlash: true,
    routes: [
      {
        url: '/',
        changefreq: 'weekly',
        priority: 1,
        lastmod: new Date().toISOString()
      }
    ]
  },
  generate: {
    fallback: true
  }
}

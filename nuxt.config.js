export default {
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

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
          'A Nuxt Capacitor with Ionic template for any cross platform applications.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        type: 'module',
        src: 'https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js'
      },
      {
        nomodule: '',
        src: 'https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/node_modules/@ionic/core/css/core.css',
    '@/node_modules/@ionic/core/css/normalize.css',
    '@/node_modules/@ionic/core/css/structure.css',
    '@/node_modules/@ionic/core/css/typography.css',
    '@/node_modules/@ionic/core/css/ionic.bundle.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/ionic.js', ssr: false },
    { src: '~/plugins/capacitor.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

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
      start_url: ''
    },
    meta: {
      theme_color: '#00FF00'
    }
  },
  robots: {
    Sitemap: process.env.SITE_URL + 'sitemap.xml'
  },
  sitemap: {
    hostname: process.env.SITE_URL,
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

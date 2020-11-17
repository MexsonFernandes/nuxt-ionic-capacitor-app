import config from '../nuxt.config'

export const state = () => ({
  appVersion: process.env.version,
  appName: config.pwa.manifest.short_name || process.env.npm_package_name,
  installAvailable: null,
  deferredPrompt: null
})

export const mutations = {
  checkInstallAvailable(state, value) {
    state.installAvailable = value
  },

  createDeferredPrompt(state, value) {
    state.deferredPrompt = value
  }
}

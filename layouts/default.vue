<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.browser) {
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault()
        // Stash the event so it can be triggered later.
        this.$store.commit('createDeferredPrompt', e)
        // Update UI notify the user they can install the PWA
        this.$store.commit('checkInstallAvailable', true)
      })
      window.addEventListener('appinstalled', () => {
        this.$store.commit('checkInstallAvailable', false)
        this.$toast.success('App is installed!')
      })
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

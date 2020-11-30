<template>
  <div>
    <ion-app>
      <Nuxt />
    </ion-app>
  </div>
</template>

<script>
export default {
  created() {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault()
        // Stash the event so it can be triggered later.
        this.$store.commit('createDeferredPrompt', e)
        // Update UI notify the user they can install the PWA
        this.$store.commit('checkInstallAvailable', true)
      })
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('appinstalled', () => {
        this.$store.commit('checkInstallAvailable', false)
        this.$toast.show('App is installed!')
      })
    }
  }
}
</script>

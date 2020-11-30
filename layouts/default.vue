<template>
  <div>
    <ion-app>
      <Nuxt />
    </ion-app>
  </div>
</template>

<script>
export default {
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
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

<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nuxt Ionic Capacitor Template</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-card>
      <ion-card-header center>
        <ion-card-subtitle>starter</ion-card-subtitle>
        <ion-card-title>Nuxt Logo</ion-card-title>
        <Logo />
      </ion-card-header>

      <ion-card-content>
        <h3 v-if="Boolean(networkStatus)" class="subtitle is-1">
          You are currently
          <ion-label
            :color="networkStatus == 'online' ? 'success' : 'danger'"
            >{{ networkStatus }}</ion-label
          >
        </h3>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit
        clean.
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-item
        href="https://github.com/MexsonFernandes/nuxt-capacitor-app"
        class="ion-activated"
      >
        <ion-icon slot="start" name="wifi"></ion-icon>
        <ion-label>GitHub Repo</ion-label>
      </ion-item>

      <ion-item @click="showToast">
        <ion-icon slot="start" name="wine"></ion-icon>
        <ion-label>Toast</ion-label>
      </ion-item>

      <ion-item v-if="$store.state.installAvailable" @click="installApp">
        <ion-icon slot="start" name="download"></ion-icon>
        <ion-label>Install App</ion-label>
      </ion-item>
    </ion-card>

    <ion-fab slot="fixed" vertical="bottom" color="danger" horizontal="end">
      <ion-fab-button>
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      networkStatus: ''
    }
  },
  mounted() {
    // check initial network and enable the listener for changes
    this.checkNetwork()
    this.$network.addListener('networkStatusChange', (status) => {
      this.networkStatus = status.connected ? 'online' : 'offline'
    })
  },
  methods: {
    async checkNetwork() {
      this.networkStatus = (await this.$network.getStatus()).connected
        ? 'online'
        : 'offline'
    },
    showToast() {
      this.$toast.show({ text: 'I am a toast!' })
    },
    installApp() {
      // Show the install promp()
      this.$store.state.deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      this.$store.state.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          this.$toast.show('Installation started!')
        } else {
          this.$toast.show('Installation canceled!')
        }
      })
    }
  }
}
</script>

<style scoped>
ion-item {
  cursor: pointer;
}
</style>

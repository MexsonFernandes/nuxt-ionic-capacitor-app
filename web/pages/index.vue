<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nuxt Ionic Capacitor Template</ion-title>
        <ion-item>
          <ion-label position="floating"
            >Two Way Binding: {{ password }}</ion-label
          >
          <ion-input
            ref="password"
            type="text"
            :value="password"
            placeholder="••••••••••"
            required="true"
            floating
            success
            @input="password = $event.target.value"
          ></ion-input>
        </ion-item>
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
        Keep close to Nature's heart... and break clear away, once in a while,
        and climb a mountain or spend a week in the woods. Wash your spirit
        clean.
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-item
        href="https://github.com/MexsonFernandes/nuxt-capacitor-app"
        class="ion-activated"
      >
        <ion-icon slot="start" :src="i.wifi"></ion-icon>
        <ion-label>GitHub Repo</ion-label>
      </ion-item>

      <ion-item @click="showToast">
        <ion-icon slot="start" :src="i.wine"></ion-icon>
        <ion-label>Cap Toast</ion-label>
      </ion-item>

      <ion-item v-if="$store.state.installAvailable" @click="installApp">
        <ion-icon slot="start" :src="i.download"></ion-icon>
        <ion-label>Install App</ion-label>
      </ion-item>
    </ion-card>

    <ion-fab
      slot="fixed"
      vertical="bottom"
      horizontal="center"
      color="secondary"
    >
      <ion-fab-button>
        <ion-icon :icon="i.share"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="top">
        <ion-fab-button
          ><ion-icon :icon="i.logoFacebook"></ion-icon
        ></ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="start">
        <ion-fab-button
          ><ion-icon :icon="i.logoInstagram"></ion-icon
        ></ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="end">
        <ion-fab-button
          ><ion-icon :icon="i.logoTwitter"></ion-icon
        ></ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  </div>
</template>

<script>
import {
  wifi,
  wine,
  download,
  add,
  share,
  logoFacebook,
  logoInstagram,
  logoTwitter
} from 'ionicons/icons'

export default {
  data: () => {
    return {
      networkStatus: null,
      i: {
        wifi,
        wine,
        download,
        add,
        share,
        logoTwitter,
        logoInstagram,
        logoFacebook
      },
      password: 'message'
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

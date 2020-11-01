<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-capacitor-app</h1>
      <div class="links">
        <a
          href="https://github.com/MexsonFernandes/nuxt-capacitor-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-button color="success">GitHub Repo</ion-button>
        </a>
      </div>

      <h3 v-if="Boolean(networkStatus)" class="subtitle is-1">
        You are currently
        <ion-label :color="networkStatus == 'online'?'success': 'danger'">{{ networkStatus }}</ion-label>
      </h3>

      <div class="links">
        <ion-button color="dark" @click="showToast">
          Toast
        </ion-button>
        <ion-button color="medium">
          Secondary
        </ion-button>
      </div>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button>
          <alert-icon class="ion-text-white" />
        </ion-fab-button>
      </ion-fab>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Plugins } from '@capacitor/core'

const { Toast, Network } = Plugins

export default Vue.extend({
  components: {},
  data: () => {
    return {
      networkStatus: ''
    }
  },
  mounted () {
    // check initial network and enable the listener for changes
    this.checkNetwork()
    Network.addListener('networkStatusChange', (status) => {
      this.networkStatus = status.connected ? 'online' : 'offline'
    })
  },
  methods: {
    async checkNetwork () {
      this.networkStatus = (await Network.getStatus()).connected
        ? 'online'
        : 'offline'
    },
    async showToast () {
      console.log('e')
      await Toast.show({ text: 'I am a toast!' })
    }
  }
})
</script>

<style>

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

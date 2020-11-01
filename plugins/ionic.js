import Vue from 'vue'
import { defineCustomElements as Ionic } from '@ionic/core/loader' // add a direct link to @ionic/core
import { defineCustomElements as Pwa } from '@ionic/pwa-elements/loader'

Vue.use(Pwa)
Vue.use(Ionic)
Vue.config.ignoredElements = [/^ion-/]

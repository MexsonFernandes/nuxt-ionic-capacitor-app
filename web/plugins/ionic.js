import Vue from 'vue'

// add a direct link to @ionic/core
import { defineCustomElements as Ionic } from '@ionic/core/loader'
import { defineCustomElements as Pwa } from '@ionic/pwa-elements/loader'

Vue.use(Ionic)
Vue.use(Pwa)
Vue.config.ignoredElements = [/^ion-/]

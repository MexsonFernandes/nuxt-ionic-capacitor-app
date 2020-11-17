import { Plugins } from '@capacitor/core'

const { Toast, Network } = Plugins

export default function ({ app }, inject) {
  inject('toast', Toast)
  inject('network', Network)
}

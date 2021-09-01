import { Toast } from '@capacitor/toast'
import { Network } from '@capacitor/network'

export default function ({ app }, inject) {
  inject('toast', Toast)
  inject('network', Network)
}

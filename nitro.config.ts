
import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  // Nitro options
  routeRules: {
    '/': { isr: 60 }
  }
})

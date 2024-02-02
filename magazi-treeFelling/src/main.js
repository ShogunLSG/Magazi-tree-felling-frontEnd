import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Vuetify

import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify/lib/framework.mjs'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).mount('#app')

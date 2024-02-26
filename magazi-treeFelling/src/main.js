import './assets/main.css'

import { createApp} from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify

import { Vuetify } from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const app = createApp(App)
app.use(router)
app.mount('#app')



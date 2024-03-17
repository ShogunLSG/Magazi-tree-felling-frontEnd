import App from './App.vue'
import {Vuetify } from 'vuetify'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

const app = createApp(App);
app.use(Vuetify);
app.mount('#app');

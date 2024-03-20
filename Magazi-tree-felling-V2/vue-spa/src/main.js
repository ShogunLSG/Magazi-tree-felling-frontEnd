import App from './App.vue'
import * as Vuetify from 'vuetify'
import { createApp } from "vue";


// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

const app = createApp(App);
app.use(Vuetify);
app.mount('#app');

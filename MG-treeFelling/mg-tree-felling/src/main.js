import { createApp } from "vue";
import router from "./router";
import store from "./store";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import "vuetify/styles";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(store).use(router).use(vuetify).mount("#app");

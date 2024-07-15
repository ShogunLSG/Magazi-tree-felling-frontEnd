<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      drawer: false,
      navItems: [
        { name: "Home", path: "/" },
        { name: "Locations", path: "/location" },
        { name: "Services", path: "/services" },
        { name: "Get Quote", path: "/quote" },
      ],
    };
  },
  methods: {
    ...mapActions(["toggleSidebar"]),
  },
};
</script>

<template>
  <v-app>
    <v-app-bar
      app
      dense
      prominent
      :elevation="8"
      class="tool-bar-content bg-black white--text"
      height="150"
    >
      <div class="d-flex align-center mx-4">
        <div class="logo mr-3">
          <img src="../src/assets/logo.png" alt="Tree Felling Logo" />
        </div>
        <v-toolbar-title class="text-h5 animated fadeInLeft"
          >Magazi Tree Felling</v-toolbar-title
        >
      </div>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="drawer = !drawer" class="d-md-none">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <div
        class="d-none d-md-flex justify-space-around mx-4 animated fadeInRight"
      >
        <v-btn
          v-for="item in navItems"
          :key="item.path"
          :color="item.name === 'Get Quote' ? 'green' : 'white'"
          :class="[
            'mx-2',
            'text-h6',
            { 'text-black': item.name === 'Get Quote' },
          ]"
          :rounded="item.name === 'Get Quote' ? 'xl' : undefined"
          :variant="item.name === 'Get Quote' ? 'tonal' : undefined"
        >
          <RouterLink :to="item.path">{{ item.name }}</RouterLink>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary app class="bg-black">
      <v-list>
        <v-list-item
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          link
        >
          <v-list-item-title class="white--text">{{
            item.name
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <RouterView />
    </v-main>

    <v-footer color="dark-green">
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  align-content: center;
}

v-app {
  align-content: center;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  transition: all 0.3s ease;
}

nav a.router-link-exact-active {
  color: #42b983;
}

img {
  width: auto;
  height: auto;
  object-fit: cover;
}

/* Animations */
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeInLeft {
  animation-name: fadeInLeft;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeInRight {
  animation-name: fadeInRight;
}

@media (max-width: 960px) {
  .v-toolbar-title {
    font-size: 1.2rem !important;
  }
}

.v-navigation-drawer {
  background-color: #000 !important;
}

.v-list-item {
  color: white !important;
}

.v-list-item:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
</style>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["toggleSidebar"]),
  },
};
</script>

<template>
  <v-app>
    <nav>
      <div class="tool-bar">
        <v-toolbar
          dense
          prominent
          extended
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
          <div class="d-flex justify-space-around mx-4 animated fadeInRight">
            <v-btn color="primary" class="mx-2 text-h6">
              <RouterLink to="/">Home</RouterLink>
            </v-btn>
            <v-btn color="white" class="mx-2 text-h6 text--white">
              <RouterLink to="/location">Locations</RouterLink>
            </v-btn>
            <v-btn color="white" class="mx-2 text-h6 text-white">
              <RouterLink to="/services">Services</RouterLink>
            </v-btn>
            <v-btn
              class="getQuote mx-2 text-h6 text-black"
              color="green"
              rounded="xl"
              variant="tonal"
              append-icon="$vuetify"
            >
              <RouterLink to="/quote">Get Quote</RouterLink>
            </v-btn>
          </div>
        </v-toolbar>
      </div>
    </nav>
    <div class="content">
      <RouterView />
    </div>
    <footer>
      <v-footer color="dark-green">
        <v-row justify="center" no-gutters>
          <v-col class="text-center mt-4" cols="12">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-col>
        </v-row>
      </v-footer>
    </footer>
  </v-app>
</template>

<style>
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
  color: #ffffff; /* Change the color to white */
  transition: all 0.3s ease;
}
nav a.router-link-exact-active {
  color: #42b983; /* Keep the active link color as is */
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
</style>

<script></script>
<template>
  <v-app>
    <nav>
      <div class="tool-bar">
        <v-toolbar
          :elevation="8"
          class="tool-bar-content"
          title="Magazi Tree Felling"
        >
          <RouterLink to="/">
            <div class="logo">
              <img src="../src/assets/logo.png" alt="Tree Felling Logo" />
            </div>
            <h2>Magazi Tree Felling</h2>
          </RouterLink>

          <div class="d-flex justify-space-around">
            <v-btn color="primary">
              <RouterLink to="/location">Locations</RouterLink>
            </v-btn>

            <v-btn color="primary">
              <RouterLink to="/services">Services</RouterLink>
            </v-btn>

            <v-btn
              class="getQuoute"
              rounded="xl"
              varient="tonal"
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
      <v-footer class="bg-grey-lighten-1">
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
#content {
  margin: auto;
}

#tool-bar {
  margin: 0%;
}

v-app {
  align-content: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

img {
  width: auto;
  height: auto;
  object-fit: cover;
}
</style>

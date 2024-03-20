<script>
export default {
  data() {
    return {
      items: [
        { title: "Menu Item 1" },
        { title: "Menu Item 2" },
        { title: "Menu Item 3" },
        // Add more menu items as needed
      ],
    };
  },
};
</script>
<template>
  <h1>Hello World</h1>
  <div class="Wrapper">
    <nav>
      <div class="tool-bar">
        <v-toolbar
          :elevation="8"
          title="Magazi Tree Felling"
          class="tool-bar-content"
        >
          <div class="d-flex justify-space-around">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props"> Locations </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props"> Services </v-btn>

                <v-btn
                  class="getQuoute"
                  rounded="xl"
                  varient="tonal"
                  append-icon="$vuetify"
                >
                  <router-link to="/quote">Get Quote</router-link>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                  :value="index"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-toolbar>
      </div>
    </nav>
    <div class="content">
      <router-view />
    </div>
    <div class="services">Was for Services</div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>

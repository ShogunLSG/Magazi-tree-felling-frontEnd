<template>
  <div id="app">
    <header>
      <h1>Vue.js SPA</h1>
    </header>
    <main>
      <aside class="sidebar">
        <h2>Oi Oi</h2>
      </aside>
      <div class="content">
        <div class="Wrapper">
          <nav>
          <div class="tool-bar">
            <v-toolbar :elevation="8" title="Magazi Tree Felling" class="tool-bar-content">
              <div class="d-flex justify-space-around">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn
                      color="primary"
                      v-bind="props"
                    >
                      Locations
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items"
                      :key="index"
                      :value="index"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn
                      color="primary"
                      v-bind="props"
                    >
                      Services
                    </v-btn>

                    <v-btn class="getQuoute" rounded="xl" varient="tonal" append-icon="$vuetify">
                      <RouterLink to="/quote">Get Quote</RouterLink>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items"
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
          <RouterView />
        </div>
        <div class="services">
          Was for Services
        </div>
      </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

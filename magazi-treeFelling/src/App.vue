<script setup>
// import { RouterView } from 'vue-router'
// import { onBeforeMount } from 'vue';
// onBeforeMount(() => {
//   console.log(`the component is now mounted.`)
// })
</script>
<template>
  <h1>Hello World</h1>
  <!-- <div class="Wrapper">
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
  </div> -->
</template>

<style scoped>
  /* .Wrapper {
    background-color: rgb(36, 67, 21);
    display: block;
    height: 100vh;
    width: 100vh;
    height: max-content;
    text-align: center;
  }

  MenuToolBar {
    width: 100vh;
    height: fit-content;
    background-color: black;
    color: #ffffff;
  }

  .content p{
    background-color:rgb(36, 67, 21);
    padding: 0px;
    margin: -10px;
    color: #ffffff;
  }

  v-container, v-row, v-col, v-sheet{
    color: rgb(67, 66, 21);
    background-color: rgb(86, 229, 15);
    padding: -10px;
    margin:-10px;
    background-color: black;

  }

  h1{
    align-content: center;
    color: #ffffff;
    padding: 10px
  }

  img{
    height: 100%;
    width: 100%;
    margin: -10px
  }

  ul, p{
    text-align: left;
    margin: 30px;
    color: #ffffff;
  }
  .getQuoteButton{
    margin: 30px;
  }
  v-sheet, v-img{
    margin: 0px;
    padding: 0px;
    background-color: black;
  } */
</style>

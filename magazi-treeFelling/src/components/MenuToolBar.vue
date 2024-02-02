<script>
  export default{
    data(){
      return {
        items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      }
    }
  }
</script>

<template>
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
              Get Quoute
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
</template>

<style scoped>
.tool-bar{

  padding: 20px;
  background-color: rgb(0, 0, 0);
  color:aliceblue;
  display: flex;
}
.tool-bar-content{
  background-color: black;
  color:aliceblue;
  width: 100vh;
  display: block;
}

.getQuoute{
  width:50%;
}

</style>
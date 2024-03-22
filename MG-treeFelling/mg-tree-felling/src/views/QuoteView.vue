<script setup>
import FormComponent from "@/components/FormComponent.vue";
</script>

<template>
  <div class="Wrapper">
    <h1>Get Your free Quote</h1>
    <v-container>
      <FormComponent />
    </v-container>
  </div>
</template>

<style scoped>
.Wrapper {
  background-color: rgb(36, 67, 21);
  display: block;
  height: 100vh;
  width: 100vh;
  height: max-content;
  text-align: center;
  margin: auto;
}

MenuToolBar {
  width: 100vh;
  height: fit-content;
  background-color: black;
  color: #ffffff;
}

.content p {
  background-color: rgb(36, 67, 21);
  padding: 0px;
  margin: -10px;
  color: #ffffff;
}

v-container,
v-row,
v-col,
v-sheet {
  color: rgb(67, 66, 21);
  background-color: rgb(86, 229, 15);
  padding: -10px;
  margin: -10px;
  background-color: black;
}

h1 {
  align-content: center;
  color: #ffffff;
  padding: 10px;
}

img {
  height: 100%;
  width: 100%;
  margin: -10px;
}

ul,
p {
  text-align: left;
  margin: 30px;
  color: #ffffff;
}
.getQuoteButton {
  margin: 30px;
}
v-sheet,
v-img {
  margin: 0px;
  padding: 0px;
  background-color: black;
}
</style>

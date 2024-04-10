<script>
export default {
  props: {
    location: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <v-card class="mx-auto location-card" max-width="400">
    <v-img
      :src="location.coverImage"
      height="200px"
      cover
      class="location-cover"
    ></v-img>

    <v-card-title>
      {{ location.name }}
    </v-card-title>

    <v-card-text>
      <p>{{ location.address }}</p>
      <p>Phone: {{ location.phoneNumber }}</p>
      <p>Email: {{ location.email }}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" text> Get Directions </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.location-card {
  transition: all 0.3s ease;
}

.location-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.location-cover {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
</style>

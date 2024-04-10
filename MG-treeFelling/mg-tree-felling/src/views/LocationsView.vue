<script>
import LocationCard from "@/components/LocationCard.vue";

export default {
  components: {
    LocationCard,
  },
  data() {
    return {
      locations: [
        {
          id: 1,
          name: "Magazi Tree Felling - Main Office",
          address: "123 Main St, Cityville, ST 12345",
          phoneNumber: "(555) 555-5555",
          email: "info@magazitreefelling.com",
          coverImage: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
        {
          id: 2,
          name: "Magazi Tree Felling - East Branch",
          address: "456 Oak Rd, Eastville, ST 67890",
          phoneNumber: "(555) 555-5556",
          email: "east@magazitreefelling.com",
          coverImage: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        },
        {
          id: 3,
          name: "Magazi Tree Felling - West Branch",
          address: "789 Pine Ave, Westville, ST 24680",
          phoneNumber: "(555) 555-5557",
          email: "west@magazitreefelling.com",
          coverImage: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="locations-wrapper">
    <div class="locations-header">
      <h1>Our Locations</h1>
      <p>
        Magazi Tree Felling has multiple locations to better serve our customers
        across the region. Find the location nearest to you and contact us for
        all your tree-related needs.
      </p>
    </div>
    <v-container>
      <v-row>
        <v-col
          v-for="location in locations"
          :key="location.id"
          cols="12"
          md="4"
        >
          <LocationCard :location="location" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.locations-wrapper {
  background-color: rgb(36, 67, 21);
  padding: 40px 0;
}

.locations-header {
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
}

.locations-header h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.locations-header p {
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto;
}
</style>

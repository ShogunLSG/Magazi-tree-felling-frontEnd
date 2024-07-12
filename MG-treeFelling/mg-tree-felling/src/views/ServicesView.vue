<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    return { router };
  },
  data() {
    return {
      tab: "Tree Removal",
      items: [
        { name: "Tree Removal", icon: "mdi-tree" },
        { name: "Stump Grinding", icon: "mdi-tree-outline" },
        { name: "Brush Clearing", icon: "mdi-forest" },
        { name: "Emergency Services", icon: "mdi-alert" },
      ],
      tabContent: {
        "Tree Removal": {
          text: "We offer professional tree removal services...",
          table: [
            { service: "Small Tree Removal", price: "R2,500 - R5,000" },
            { service: "Medium Tree Removal", price: "R5,000 - R10,000" },
            { service: "Large Tree Removal", price: "R10,000 - R25,000" },
          ],
        },
        "Stump Grinding": {
          text: "After tree removal, we provide stump grinding services...",
          table: [
            { service: "Small Stump Grinding", price: "R750 - R1,500" },
            { service: "Medium Stump Grinding", price: "R1,500 - R3,000" },
            { service: "Large Stump Grinding", price: "R3,000 - R6,000" },
          ],
        },
        "Brush Clearing": {
          text: "Our brush clearing services help clear overgrown areas...",
          table: [
            { service: "Small Brush Clearing", price: "R2,000 - R4,000" },
            { service: "Medium Brush Clearing", price: "R4,000 - R8,000" },
            { service: "Large Brush Clearing", price: "R8,000 - R15,000" },
          ],
        },
        "Emergency Services": {
          text: "In case of emergencies, such as fallen trees or branches...",
          table: [
            { service: "Emergency Tree Removal", price: "Starting at R5,000" },
            {
              service: "Emergency Debris Removal",
              price: "Starting at R3,000",
            },
          ],
        },
      },
    };
  },
  methods: {
    requestQuote(service) {
      // Navigate to the quote page with the selected service as a query parameter
      this.router.push({
        name: "quote", // Make sure this matches the name in your route configuration
        query: { service: service },
      });
    },
  },
};
</script>

<template>
  <div class="services-wrapper">
    <v-container class="py-8">
      <v-card color="basil" flat class="px-4">
        <v-card-title class="text-center justify-center py-6">
          <h1>Tree Felling Services</h1>
        </v-card-title>
        <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
          <v-tab v-for="item in items" :key="item.name" :value="item.name">
            <v-icon start>{{ item.icon }}</v-icon>
            {{ item.name }}
          </v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item
            v-for="item in items"
            :key="item.name"
            :value="item.name"
          >
            <v-card color="basil" flat>
              <v-row class="mt-4">
                <v-col cols="12" md="6">
                  <v-card-text class="service-description pa-4">
                    {{ tabContent[item.name].text }}
                  </v-card-text>
                  <v-btn
                    color="primary"
                    class="ml-4 mb-4"
                    @click="requestQuote(item.name)"
                  >
                    Get a Quote
                  </v-btn>
                </v-col>
                <v-col cols="12" md="6">
                  <v-table class="mt-4">
                    <thead>
                      <tr>
                        <th>Service</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(row, index) in tabContent[item.name].table"
                        :key="index"
                      >
                        <td>{{ row.service }}</td>
                        <td>{{ row.price }}</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-col>
              </v-row>
            </v-card>
          </v-window-item>
        </v-window>
      </v-card>
    </v-container>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans&display=swap");

.v-btn.primary {
  background-color: #4caf50; /* A green color that fits with a tree service theme */
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.v-btn.primary:hover {
  background-color: #45a049;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.services-wrapper {
  background-color: rgb(36, 67, 21);
  padding: 40px 0;
}

.v-card {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.v-card-title h1 {
  background-color: rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  color: #2c3e50; /* Adjust color as needed */
}

.v-tabs {
  background-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  align-items: center;
}

.v-tabs .v-icon {
  margin-right: 8px;
}

.v-window {
  background-color: rgb(36, 67, 21);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.service-description {
  padding: 20px;
  text-align: justify;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #34495e; /* Adjust color as needed */
}

.v-table {
  margin: 20px;
}

.v-table thead {
  background-color: rgba(0, 0, 0, 0.1);
}

.v-table td {
  padding: 10px;
  font-family: "Open Sans", sans-serif;
}

.v-table th {
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
}
</style>

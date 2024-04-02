<script>
export default {
  data() {
    return {
      tab: "Tree Removal",
      items: [
        "Tree Removal",
        "Stump Grinding",
        "Brush Clearing",
        "Emergency Services",
      ],
      tabContent: {
        "Tree Removal": {
          text: "We offer professional tree removal services for residential and commercial properties. Our experienced arborists use safe and efficient methods to remove trees of any size, ensuring minimal impact on your property.",
          table: [
            { service: "Small Tree Removal", price: "R2,500 - R5,000" },
            { service: "Medium Tree Removal", price: "R5,000 - R10,000" },
            { service: "Large Tree Removal", price: "R10,000 - R25,000" },
          ],
        },
        "Stump Grinding": {
          text: "After tree removal, we provide stump grinding services to completely remove the remaining stump from your property. This process leaves a clean and level surface, ready for landscaping or planting.",
          table: [
            { service: "Small Stump Grinding", price: "R750 - R1,500" },
            { service: "Medium Stump Grinding", price: "R1,500 - R3,000" },
            { service: "Large Stump Grinding", price: "R3,000 - R6,000" },
          ],
        },
        "Brush Clearing": {
          text: "Our brush clearing services help clear overgrown areas, removing unwanted shrubs, bushes, and vegetation. This service is ideal for maintaining your property and reducing fire hazards.",
          table: [
            { service: "Small Brush Clearing", price: "R2,000 - R4,000" },
            { service: "Medium Brush Clearing", price: "R4,000 - R8,000" },
            { service: "Large Brush Clearing", price: "R8,000 - R15,000" },
          ],
        },
        "Emergency Services": {
          text: "In case of emergencies, such as fallen trees or branches, we offer 24/7 emergency services to quickly and safely remove any hazards from your property.",
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
};
</script>

<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 text-basil">Tree Felling Services</h1>
    </v-card-title>
    <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item" :value="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item v-for="item in items" :key="item" :value="item">
        <v-card color="basil" flat>
          <v-card-text>{{ tabContent[item].text }}</v-card-text>
          <v-table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in tabContent[item].table" :key="index">
                <td>{{ row.service }}</td>
                <td>{{ row.price }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

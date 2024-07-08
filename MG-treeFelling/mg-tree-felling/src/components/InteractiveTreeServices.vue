<template>
  <div class="interactive-tree">
    <svg width="300" height="400" viewBox="0 0 300 400">
      <!-- Tree trunk -->
      <path
        d="M150 400 L150 200 Q150 150 120 100 T150 50"
        fill="none"
        stroke="#6d4c41"
        stroke-width="20"
      />

      <!-- Tree branches / service nodes -->
      <template v-for="(service, index) in services" :key="index">
        <g class="service-node" @click="selectService(index)">
          <!-- Larger invisible circle for hover area -->
          <circle :cx="service.x" :cy="service.y" r="30" fill="transparent" />
          <!-- Visible circle -->
          <circle :cx="service.x" :cy="service.y" r="20" fill="#4caf50" />
        </g>
      </template>
    </svg>

    <div v-if="selectedService" class="service-info">
      <h3>{{ selectedService.title }}</h3>
      <p>{{ selectedService.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Tree Felling",
          description: "Safe and efficient tree removal.",
          x: 100,
          y: 100,
        },
        {
          title: "Pruning",
          description: "Improve tree health and appearance.",
          x: 200,
          y: 150,
        },
        {
          title: "Stump Grinding",
          description: "Complete stump removal.",
          x: 150,
          y: 200,
        },
        {
          title: "Emergency Services",
          description: "24/7 emergency tree care.",
          x: 100,
          y: 250,
        },
        {
          title: "Tree Planting",
          description: "Expert tree selection and planting.",
          x: 200,
          y: 300,
        },
      ],
      selectedService: null,
    };
  },
  methods: {
    selectService(index) {
      this.selectedService = this.services[index];
    },
  },
};
</script>

<style scoped>
.interactive-tree {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}

.service-node {
  cursor: pointer;
}

.service-node circle:nth-child(2) {
  transition: all 0.3s ease;
}

.service-node:hover circle:nth-child(2) {
  fill: #45a049;
  transform: scale(1.1);
}

.service-info {
  margin-top: 20px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  max-width: 300px;
}

.service-info h3 {
  color: #4caf50;
  margin-bottom: 10px;
}

.service-info p {
  color: #ffffff;
}
</style>

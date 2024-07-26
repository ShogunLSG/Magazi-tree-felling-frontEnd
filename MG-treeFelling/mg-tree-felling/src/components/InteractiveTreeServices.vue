<template>
  <div class="interactive-tree-container">
    <div class="tree-svg-container">
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
    </div>

    <div class="service-info-container">
      <div v-if="selectedService" class="service-info">
        <h3>{{ selectedService.title }}</h3>
        <p>{{ selectedService.description }}</p>
      </div>
      <div v-else class="service-info-placeholder">
        <p>Click on a tree node to view service details.</p>
      </div>
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
.interactive-tree-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
}

.tree-svg-container {
  flex: 0 0 300px;
  max-width: 100%;
}

.tree-svg-container svg {
  max-width: 100%;
  height: auto;
}

.service-info-container {
  flex: 1;
  min-width: 250px;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
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

.service-info,
.service-info-placeholder {
  width: 100%;
  padding: 20px; /* Added padding here */
  background-color: rgba(0, 0, 0, 0.1); /* Slight background for visibility */
  border-radius: 8px;
}

.service-info h3 {
  color: #4caf50;
  margin-bottom: 10px;
}

.service-info p,
.service-info-placeholder p {
  color: #ffffff;
}

@media (max-width: 768px) {
  .interactive-tree-container {
    flex-direction: column;
    align-items: center;
  }

  .tree-svg-container,
  .service-info-container {
    flex: 0 0 100%;
  }

  .service-info-container {
    min-height: 200px;
  }
}
</style>

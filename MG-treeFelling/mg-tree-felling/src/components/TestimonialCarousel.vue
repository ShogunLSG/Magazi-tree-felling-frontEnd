<template>
  <div class="testimonial-carousel">
    <v-carousel
      v-model="currentIndex"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="auto"
      :continuous="true"
      :cycle="cycle"
      interval="5000"
    >
      <v-carousel-item
        v-for="(testimonial, i) in testimonials"
        :key="i"
        class="testimonial-item"
      >
        <v-card class="mx-auto" max-width="600">
          <v-card-text>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <p class="testimonial-author">- {{ testimonial.author }}</p>
          </v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      cycle: true,
      testimonials: [
        {
          text: "Magazi Tree Felling did an excellent job removing a large oak from our backyard. They were professional, efficient, and left the area spotless!",
          author: "John D., Homeowner",
        },
        {
          text: "I've used Magazi for both emergency services and regular maintenance. Their team is always prompt, courteous, and knowledgeable.",
          author: "Sarah L., Property Manager",
        },
        {
          text: "The Magazi team's expertise in tree care is unmatched. They saved our old maple tree with their skillful pruning techniques.",
          author: "Michael R., Landscaper",
        },
        // Add more testimonials as needed
      ],
    };
  },
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style scoped>
.testimonial-carousel {
  margin: 40px 0;
  position: relative;
}

.testimonial-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.testimonial-text {
  font-style: italic;
  font-size: 1.1em;
  margin-bottom: 10px;
}

.testimonial-author {
  text-align: right;
  font-weight: bold;
}

.carousel-controls {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.v-btn--icon {
  background-color: rgba(255, 255, 255, 0.3);
}

/* Customize Vuetify carousel styles */
::v-deep .v-carousel__controls {
  background: transparent;
}

::v-deep .v-carousel__controls__item {
  margin: 0 4px;
}

::v-deep .v-carousel__controls__item .v-icon {
  opacity: 0.5;
}

::v-deep .v-carousel__controls__item--active .v-icon {
  opacity: 1;
}
</style>

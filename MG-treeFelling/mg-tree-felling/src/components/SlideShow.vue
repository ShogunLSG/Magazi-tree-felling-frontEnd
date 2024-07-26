<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const interval = ref(6000);
const showArrows = ref(true);
const showDelimiters = ref(true);
const currentIndex = ref(0);
const items = ref([
  { src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg" },
  { src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg" },
  { src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" },
]);

let timer;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % items.value.length;
};

const startTimer = () => {
  timer = setInterval(nextSlide, interval.value);
};

const stopTimer = () => {
  clearInterval(timer);
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  stopTimer();
});
</script>

<template>
  <div class="custom-carousel-wrapper">
    <div
      class="custom-carousel"
      @mouseenter="stopTimer"
      @mouseleave="startTimer"
    >
      <transition-group name="fade">
        <div
          v-for="(item, index) in items"
          :key="item.src"
          v-show="index === currentIndex"
          class="custom-image-slide"
        >
          <img
            :src="item.src"
            :alt="'Slide ' + (index + 1)"
            class="custom-zoom-image"
          />
        </div>
      </transition-group>
      <div class="carousel-controls">
        <button
          v-if="showArrows"
          @click="
            currentIndex = (currentIndex - 1 + items.length) % items.length
          "
        >
          &lt;
        </button>
        <div v-if="showDelimiters" class="delimiters">
          <span
            v-for="(_, index) in items"
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="currentIndex = index"
          ></span>
        </div>
        <button
          v-if="showArrows"
          @click="currentIndex = (currentIndex + 1) % items.length"
        >
          &gt;
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-carousel-wrapper {
  height: 700px;
  position: relative;
}

.custom-carousel {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.custom-image-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.custom-zoom-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: customZoomEffect 6s linear infinite;
}

@keyframes customZoomEffect {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}

.carousel-controls {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-controls button {
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 0 10px;
  cursor: pointer;
}

.delimiters {
  display: flex;
  gap: 10px;
}

.delimiters span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}

.delimiters span.active {
  background-color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

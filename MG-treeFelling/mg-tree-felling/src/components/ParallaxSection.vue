<template>
  <div class="parallax-container" ref="container">
    <div class="parallax-background" :style="backgroundStyle">
      <slot name="background"></slot>
    </div>
    <div class="parallax-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offsetY: 0,
    };
  },
  computed: {
    backgroundStyle() {
      return {
        transform: `translateY(${this.offsetY * 0.5}px)`,
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const rect = this.$refs.container.getBoundingClientRect();
      this.offsetY = window.innerHeight - rect.top;
    },
  },
};
</script>

<style scoped>
.parallax-container {
  position: relative;
  overflow: hidden;
}

.parallax-background {
  position: absolute;
  top: -50%;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.parallax-content {
  position: relative;
  z-index: 1;
}
</style>

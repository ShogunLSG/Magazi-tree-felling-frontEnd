<template>
  <div ref="section" :class="{ 'fade-in': isVisible, hidden: !isVisible }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isVisible = entry.isIntersecting;
      },
      {
        root: null,
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
    observer.observe(this.$refs.section);
  },
};
</script>

<style scoped>
.hidden {
  opacity: 0;
  transform: translateY(20px);
}

.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
</style>

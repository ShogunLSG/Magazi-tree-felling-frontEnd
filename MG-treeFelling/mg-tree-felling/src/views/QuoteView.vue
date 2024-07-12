<script setup>
import FormComponent from "@/components/FormComponent.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const quoteFormRef = ref(null);
const formComponentRef = ref(null);
const route = useRoute();

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // Check if a service was passed in the URL
  const service = route.query.service;
  if (service && formComponentRef.value) {
    // Pre-select the service in the form
    formComponentRef.value.select.value = service;
  }
});

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const quoteFormElement = quoteFormRef.value;

  if (quoteFormElement) {
    const quoteFormTop = quoteFormElement.offsetTop;
    const quoteFormHeight = quoteFormElement.offsetHeight;
    const windowHeight = window.innerHeight;

    if (
      scrollPosition > quoteFormTop - windowHeight + quoteFormHeight / 2 &&
      scrollPosition < quoteFormTop + quoteFormHeight
    ) {
      quoteFormElement.style.opacity = 1;
      quoteFormElement.style.transform = "translateY(0)";
    } else {
      quoteFormElement.style.opacity = 0;
      quoteFormElement.style.transform = "translateY(50px)";
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="quote-form" ref="quoteFormRef">
      <h1 class="form-title">Get Your Free Quote</h1>
      <FormComponent ref="formComponentRef" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #244315;
}

.quote-form {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: 0.7;
  transform: translateY(50px);
}

.form-title {
  text-align: center;
  color: #244315;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
}
</style>

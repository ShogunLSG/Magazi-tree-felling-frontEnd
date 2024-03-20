import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuoteView from "../views/QuoteView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/quote",
    name: "quote",
    component: QuoteView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

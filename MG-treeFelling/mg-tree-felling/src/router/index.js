import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuoteView from "../views/QuoteView.vue";
import LocationsView from "@/views/LocationsView.vue";
import ServicesView from "@/views/ServicesView.vue";

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
  {
    path: "/location",
    name: "location",
    component: LocationsView,
  },
  {
    path: "/services",
    name: "services",
    component: ServicesView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MerchantView from "../views/MerchantView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/merchant",
      name: "merchant",
      component: MerchantView,
    },
  ],
});

export default router;

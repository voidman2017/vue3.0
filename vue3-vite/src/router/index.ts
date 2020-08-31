import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Setup from "../views/setup.vue";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/setup",
      component: Setup,
    },
  ],
});

export default router;

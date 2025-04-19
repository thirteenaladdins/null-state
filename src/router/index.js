import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/Landing.vue";
import Profiles from "../views/Profiles.vue";
import Logs from "../views/Logs.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: Landing,
    },
    {
      path: "/profiles",
      name: "profiles",
      component: Profiles,
    },
    {
      path: "/logs",
      name: "logs",
      component: Logs,
    },
  ],
});

export default router;

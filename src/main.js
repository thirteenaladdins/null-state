import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

import Landing from "./views/Landing.vue";
import Profiles from "./views/Profiles.vue";
import Logs from "./views/Logs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Landing },
    { path: "/profiles", component: Profiles },
    { path: "/logs", component: Logs },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");

import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";

import Landing from "./views/Landing.vue";
import Profiles from "./views/Profiles.vue";
import Logs from "./views/Logs.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");

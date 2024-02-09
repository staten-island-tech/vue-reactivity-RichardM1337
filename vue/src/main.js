import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./input.css";
import "aos/dist/aos.css";
import router from "./router";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

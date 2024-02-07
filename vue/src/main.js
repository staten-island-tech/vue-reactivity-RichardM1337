import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
new Vue({
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");

app.mount("#app");

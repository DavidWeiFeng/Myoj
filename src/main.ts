import { createApp } from "vue";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/access/index";

createApp(App).use(store).use(router).use(ArcoVue).mount("#app");
